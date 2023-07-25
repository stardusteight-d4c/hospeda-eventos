:brazil: <a href="https://github.com/stardusteight-d4c/hospeda-eventos/tree/main/README-pt-br.md">Go to portuguese version</a>

<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
   Hospeda Eventos, Technical Challenge
</h1>

This is an application proposed as a technical challenge for a vacancy of <strong>Full Stack Developer</strong>, the challenge is to evaluate how the participant reacts to the development of an application in a short period of time.

The challenge was proposed on `21/07/2023 21:07` and should be delivered by `25/07/2023`. And as stated in the statement below, I will document here the main technologies, implementations and decisions taken during development.

```md
## Hospeda Eventos | Technical Challenge

### Goal

> The objective of this challenge is to develop a system for listing and registering events
> using React.js on the frontend and Node.js on the backend. The system must follow the prototype
> provided in Figma as a visual reference.

### Frontend

- Develop the system frontend in React.js, preferably in typescript;
- Develop the system faithfully following Figma's prototype;
- Implement the listing of events according to the prototype;
- Allow creation, edition and deletion of events.

### Backend

- Create the system backend in Node.js;
- Define the routes necessary to carry out the operations of listing, registration, editing
  and deletion of events;
- Use a RESTful or GraphQL approach for server requests.

### Instructions

- Create a repository on GitHub for the project;
- Develop the frontend and backend following the specifications;
- Use the technologies and frameworks you deem appropriate for the project;
- Implement interface responsiveness for different screen sizes;
- The project must be delivered by the established deadline (Tuesday, the 25th);
- Send the GitHub repository link containing the project code by WhatsApp.

> Feel free to use libraries and tools that facilitate development.
> Remember to document the project and explain any major decisions made during
> the development.
```

## :hammer_and_wrench: Tools

### Frontend

- TypeScript
- React
- Next.js
- Server Components
- TailwindCSS
- Supabase
- React Awesome Reveal

### Backend

- TypeScript
- NestJS
- Express
- Prisma
- MongoDB
- Unitary Tests
- Domain-driven Design

## :mailbox_with_mail: Utilitários

### Frontend

-> React.js 18 & Next.js 13

Having the interface prototype in hand, I decided to start the development of the application by designing the web interface, so as one of the requirements is to use React in the frontend application, I chose to start a project using a framework that works on top of React and which is recommended by the official documentation of React 18, Next.js. Next.js adds some very useful features that facilitate the development of frontend applications in React, let's see some use cases of Next and React in this application:

Using the Next framework together with a new feature of React 18 called Server Components, we can make requests and cache the same requests through a Node.js server provided by Next.js that runs behind the scenes in a frontend application, that is, instead of delivering the files to the Browser client on the frontend for 100 users for example and making the requests on the client side (which would be `100 requests`), we can simply make `a single request on the server` Node of Next and with the Server Components we can make requests within the interface components themselves and send the components already with the populated data.

This improves application performance drastically and reduces the amount of JavaScript being executed in the Browser Client, so with Next.js we can even create a complete server that offers an API service by the frontend project itself. So currently the use of a frontend framework is essential for agile development and that adds greater value to the application in a simple way, with ready-made and efficient solutions.

-> TailwindCSS

I adopted the use of TailwindCSS in this application as I usually do in my other applications, but why Tailwind?

The frontend is a layer of the project that doesn't need to have additional complexity, we don't need to waste time solving stylization problems and having to configure hundreds of CSS files and know where each class is defined and everything... So TailwindCSS is a CSS framework of utility classes that boosts productivity in creating interfaces and reduces their complexity.

-> Supabase Storage

I implemented the sending of the image for the cover of the event, in the prototype form there was not this option, but as it is something important for the display of the event data in the "my-events" page, I decided to implement this feature using the Supabase Storage service, I could implement this just by linking with a web url, or even sending a base64 image to the server, the first option may even be viable, since we can update the event in case the URL link breaks, the second is certainly a bad option, since a base64 image represents the image file itself in a string of colossal size, as if it were a kind of binary image, so to maintain a certain consistency and control of the application data I decided to convert the image in base64 to a file and store it in a specific service for that, and so I end up sending only the image link to the server:

```ts
export async function handleBase64ImageAndSendToSupabaseStorage(
  base64Image: string
): Promise<{ file: File | null; imageUrl: string }> {
  if (base64Image.includes("npkgygdsueoipbtxntly.supabase.co")) {
    return { file: null, imageUrl: base64Image }
  } else {
    info("Convertendo imagem em base64 para arquivo...")
    const STORAGE_URL = `https://npkgygdsueoipbtxntly.supabase.co/storage/v1/object/public/thumbnails/`
    const uid = new ShortUniqueId({ length: 15 })
    const fileName = `${uid()}.png`
    const file = dataURLtoFile(base64Image, fileName)
    const imageUrl = STORAGE_URL + fileName
    await supabase.storage
      .from("thumbnails")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        info("Arquivo armazenado com sucesso no Supabase Storage!")
        return
      })
      .catch((error) => console.log(error))
    return { file, imageUrl }
  }
}
```

-> Notification and Form Validation

In the form there is a lot of data to be validated before being sent to the server, it is important to always process data both on the client side and on the server side, it is also necessary to always be informing the user of processes that may be occurring in the application, for example loading data, or sending data to the backend, and there are several ways to inform the user about these events, from micro animations such as loaders for example, or a more generic way that saved me time which was the use of the `react-hot-toast` library, like this I could display a notification in the interface from anywhere in the application, just by calling a function, including returning form validation errors through these notifications.

```ts
if (eventData.name === "" || eventData.name.length < 3) {
  error(
    "O nome do evento não pode estar vazio e deve conter pelo menos 3 caracteres."
  )
  return false
}
```

<div align="center">
  <img src="/screens/notify.png" />
</div>

> So basically these were the main technologies and implementations adopted in the frontend project, I tried to keep as much organization as possible even with the short time span, today we have many libraries and frameworks that leverage development, both front and backend and so I tried to make the most of these tools.

### Backend

I don't like talking about the backend starting to talk about libraries or frameworks, a real backend system must have its core, its domain where it is independent of these external technologies, this already comes from a very old concept of programming that is encapsulation, one of the principles of object-oriented programming. Therefore, I will start describing the backend system from this core (which must be self-sustaining and independent) and go up the layers to the infra layer, which is where these technologies are usually coupled, so you can have a better idea of ​​the flow I followed and the reasons for the decisions.

So with the interface ready, and already knowing what types of data an `Event` has, we can model this data in our backend system:

```ts
export class Event {
  #id?: string
  #name: string
  #coverImage: string
  #privacy: "public" | "private"
  #description: string
  #cep: string
  #number: string
  #address: string
  #complement: string
  #neighborhood: string
  #city: string
  #state: string
  #startDate: Date
  #startTime: string

  constructor(properties: IEvent) {
    new EventValidator().ValidateEvent(properties)
    this.#id = properties.id ?? randomUUID()
    this.#name = properties.name
    this.#coverImage = properties.coverImage
    this.#privacy = properties.privacy
    this.#description = properties.description
    this.#cep = properties.cep
    this.#number = properties.number
    this.#address = properties.address
    this.#complement = properties.complement
    this.#neighborhood = properties.neighborhood
    this.#city = properties.city
    this.#state = properties.state
    this.#startDate = properties.startDate
    this.#startTime = properties.startTime
  }
}
```

By defining what an event is in the backend, we can start trying to interact with the attributes and properties of this class, or as it is called in Domain-driven Design, with this entity. Also notice that in the `Event` constructor the data that is being passed to the `Event` creation is already being validated, so in our backend there will not be an `Event` with invalid data, otherwise an error is thrown and the instance of the class is interrupted.

Now where is the `Event` being handled? Who is responsible for handling this data and interacting with `Event` instances? In domain-driven design we call the entity that has this role `service`:

```ts
export class EventService implements IEventService {
  constructor(readonly eventRepository: IEventRepository) {}

  public async createEvent(request: Event): Promise<IEvent> {
    return this.eventRepository
      .create(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err)
        return null
      })
  }

  public async updateEvent(request: Event): Promise<IEvent> {
    return this.eventRepository
      .update(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err)
        return null
      })
  }

  public async deleteEvent(request: { id: string }): Promise<void> {
    return this.eventRepository.delete({ id: request.id }).catch((err) => {
      console.error(err)
      return null
    })
  }

  public async getById(request: { id: string }): Promise<IEvent> {
    return this.eventRepository
      .find({ id: request.id })
      .then((event) => event?.reflect ?? null)
      .catch((err) => {
        console.error(err)
        return null
      })
  }
  // More methods...
}
```

A service has the role of handling the data that comes in the request, instantiating entities and interacting with the persistence layer, which in domain-driven design called `repositories`, is a place that will store the entities, so in the services layer we can make validations or apply more complex business rules before saving in a database for example. But even so, the service does not depend directly on the `repository`, only on an abstract interface, a contract, just as the service itself can follow an interface/contract that defines only its methods, but has nothing concretely implemented:

```ts
export interface IEventService {
  createEvent(request: Event): Promise<IEvent>
  updateEvent(request: Event): Promise<IEvent>
  deleteEvent(request: { id: string }): Promise<void>
  getById(request: { id: string }): Promise<IEvent>
  getEvents(): Promise<IEvent[]>
  getEventsByName(request: { name: string }): Promise<IEvent[]>
  getEventsWithPagination(request: {
    pageNumber: number
    pageSize: number
  }): Promise<IEvent[]>
}

export interface IEventRepository {
  create(input: Event): Promise<Event>
  update(input: Event): Promise<Event>
  delete(input: { id: string }): Promise<void>
  find(input: { id: string }): Promise<Event | null>
  getMany(): Promise<Event[]>
  getByName(input: { name: string }): Promise<Event[]>
  getWithPagination(input: {
    pageNumber: number
    pageSize: number
  }): Promise<Event[]>
}
```

And from then on we can have all the behavior of the system already running and with the business rules being applied, and that's where the unit tests come from... we can test these system units quickly and accurately, without depending on any framework or external library, for example, we can implement a repository in memory that persists the data on disk:

```tsx
describe("Event Service", () => {
  let eventService: EventService

  beforeEach(async () => {
    const inMemoryEventRepository = new InMemoryEventRepository()
    eventService = new EventService(inMemoryEventRepository)
  })

  it("should be possible to create an event", async () => {
    const eventData = makeEvent()
    const event = new Event(eventData)
    const result = await eventService.createEvent(event)
    expect(result).toBeDefined()
    expect(result.name).toBe(eventData.name)
    expect(result.address).toBe(eventData.address)
    expect(result.cep).toBe(eventData.cep)
  })

  it("should be possible update an event", async () => {
    const eventData = makeEvent()
    const event = new Event(eventData)
    const createEventResult = await eventService.createEvent(event)
    const updatedEventData = new Event({
      ...createEventResult,
      name: "Updated Name",
    })
    const updateEventResult = await eventService.updateEvent(updatedEventData)
    expect(updateEventResult).toBeDefined()
    expect(updateEventResult.id).toBe(createEventResult.id)
    expect(updateEventResult.name).not.toBe(createEventResult.name)
    expect(updateEventResult.name).toBe("Updated Name")
  })

  it("should be throw error if have an empty field", async () => {
    const eventData = makeEvent()
    delete eventData.name
    expect(() => new Event(eventData)).toThrow("all fields must be filled in")
  })

  it("should be throw error if cep is invalid", async () => {
    const eventData = makeEvent({ cep: "12-10" })
    expect(() => new Event(eventData)).toThrow("the <cep> is invalid")
  })

  it("should be throw error if privacy is invalid", async () => {
    const eventData = makeEvent({ privacy: "open-to-public" })
    expect(() => new Event(eventData)).toThrow(
      'the <privacy> should only be "public" or "private"'
    )
  })

  it("should be possible delete an event", async () => {
    const eventData = makeEvent()
    const event = new Event(eventData)
    const createEventResult = await eventService.createEvent(event)
    const findEvent = await eventService.getById({ id: createEventResult.id })
    expect(findEvent.id).toBe(event.reflect.id)
    await eventService.deleteEvent({ id: createEventResult.id })
    const findDeletedEvent = await eventService.getById({
      id: createEventResult.id,
    })
    expect(findDeletedEvent).toBe(null)
  })

  it("should be throw error if the id of the event to be deleted does not exist", async () => {
    eventService.deleteEvent({ id: "invalid-id" }).catch((err) => {
      expect(err.message).toBe("Event not found.")
    })
  })
})
```

With the whole system already working, I think about implementing the http/infra layer, and that way I can make high-level architecture decisions, such as the framework to be used, libraries, database and others. But as with the frontend, we don't need to add complexity to the project. Today there are very popular frameworks on the market that are adopted by large companies that facilitate software development without taking away the fun of programming.

As Next.js is for React, I think NestJS is for Express or Fastfy, it has several ready-made solutions, and it has an easy-to-configure routing. In this project I looked for agility, so basically with the core of the application ready, I just needed to upload a NestJS server, and configure the controllers to call the services already created. And finally, making the concrete implementation of the repository, I chose to do it with Prisma and MongoDB, Prisma is an ORM that facilitates database modeling and reduces the complexity in the syntax to be able to perform queries for them.

I mainly opted for MongoDB because it has a cloud service, that is, I can literally upload a database over the web, get the connection URL and pass it to the backend application. As I planned to quickly deploy the application, I thought it would be a great option since I wouldn't have to configure and upload the database by hand.

![screen](/screens/desktop-my-events.png)

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
