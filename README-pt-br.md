:us: <a href="https://github.com/stardusteight-d4c/hospeda-eventos/tree/main">Go to english version</a>

<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
   Hospeda Eventos, Desafio Técnico
</h1>

Esta é uma aplicação proposta como desafio técnico para uma vaga de <strong>Desenvolvedor Full Stack</strong>, o desafio consiste em avaliar como o participante reage ao desenvolvimento de uma aplicação em um curto prazo de tempo.

O desafio foi proposto dia `21/07/2023 21:07` e deveria que ser entregue até dia o `25/07/2023`. E como dito no enunciado que deixarei a seguir, documentarei aqui as principais tecnologias, implementações e decisões tomadas durante o desenvolvimento.

```md
## Hospeda Eventos | Desafio Técnico

### Objetivo
> O objetivo deste desafio é desenvolver um sistema de listagem e cadastro de eventos
utilizando React.js no frontend e Node.js no backend. O sistema deve seguir o protótipo
fornecido no Figma como referência visual.

### Frontend
- Desenvolver o frontend do sistema em React.js, em typescript de preferência;
- Desenvolver o sistema seguindo fielmente o protótipo do Figma;
- Implementar a listagem de eventos conforme o protótipo;
- Permitir a criação, edição e exclusão de eventos.

### Backend
- Criar o backend do sistema em Node.js;
- Definir as rotas necessárias para realizar as operações de listagem, cadastro, edição
e exclusão de eventos;
- Utilizar uma abordagem RESTful ou GraphQL para as requisições ao servidor.

### Instruções
- Crie um repositório no GitHub para o projeto;
- Desenvolva o frontend e o backend seguindo as especificações;
- Utilize as tecnologias e frameworks que julgar adequados para o projeto;
- Implemente a responsividade da interface para diferentes tamanhos de tela;
- O projeto deve ser entregue até a data limite estabelecida (terça-feira, dia 25);
- Envie o link do repositório GitHub contendo o código do projeto por WhatsApp.

> Sinta-se à vontade para utilizar bibliotecas e ferramentas que facilitem o desenvolvimento.
Lembre-se de documentar o projeto e explicar qualquer decisão importante tomada durante
o desenvolvimento. 
```

## :hammer_and_wrench: Ferramentas

### Frontend

- TypeScript
- React
- Next.js
- Server Components
- TailwindCSS
- Supabase
- React Awesome Reveal
- Vercel (deploy)

### Backend

- TypeScript
- NestJS
- Express
- Prisma
- MongoDB / MongoDB Atlas Database (deploy)
- Unitary Tests
- Domain-driven Design
- Render (deploy)

## :mailbox_with_mail: Utilitários
 
### Frontend

-> React.js 18 & Next.js 13

Tendo o protótipo da interface em mãos, eu decidi começar o desenvolvimento da aplicação pelo projeto da interface web, então como um dos requisitos é utilizar React na aplicação frontend, optei por começar um projeto utilizando um framework que trabalha em cima do React e que é recomendado pela própria documentação oficial do React 18, o Next.js. O Next.js adiciona alguns recursos muito úteis e que facilitam o desenvolvimento de aplicações frontend em React, vejamos alguns casos de uso do Next e React nesta aplicação:

Utilizando o framework Next junto com uma nova feature do React 18 denominada de Server Components, podemos fazer requisições e cachear as mesmas requisições através de um servidor Node.js fornecido pelo Next.js que fica rodando por de trás dos panos em uma aplicação frontend, ou seja, ao invés de entregar os arquivos para o cliente Browser no frontend para 100 usuários por exemplo e fazer as requisições pelo lado do cliente (que seriam `100 requisições`), podemons simplesmente fazer `uma única requisição no servidor` Node do Next e com os Server Components podemos fazer as requisições dentro dos próprios componentes da interface e enviar os componentes já com os dados populados. 

Isto melhora a performance da aplicação drasticamente e reduz a quantidade de JavaScript sendo executado no Cliente Browser, e assim com o Next.js podemos criar até mesmo um servidor completo que oferece um serviço de API pelo próprio projeto frontend. Então atualmente o uso de um framework frontend é indispensável para um desenvolvimento ágil e que acrescente maior valor a aplicação de uma forma simples, com soluções já prontas e eficientes.

-> TailwindCSS

Adotei o uso do TailwindCSS nesta aplicação como costumo fazer nas minhas demais aplicações, mas por que Tailwind? 

O frontend é uma camada do projeto que não precisa ter complexidade adicionais, não precisamos perder tempo resolvendo problemas de estilizações e tendo que configurar trocentos arquivos CSS e saber onde que cada classe está definida e tudo mais... o Tailwind mata esse problema pela raiz, com ele os desenvolvedores podem escrever suas estilizações no próprio elemento e deixar as mesmas diretamente acopladas ao elemento HTML sem ter que ficar caçando classes e estilizações em arquivos CSS. Então o TailwindCSS é um framework CSS de classes utilitárias que potêncializa a produtividade na criação de interfaces e diminiu a sua complexidade.

-> Supabase Storage

Implementei o envio da imagem para a capa do evento, no formulário do protótipo não havia esta opção, mas como é algo importante para a exibição dos dados do evento na página "meus-eventos" decidi implementar esta feature utilizando o serviço de Storage do Supabase, poderia implementar isto apenas linkando com uma url web, ou até mesmo enviando uma imagem em base64 para o servidor, a primeira opção pode ser até viável, já que podemos atualizar o evento caso o link da URL quebre, a segunda com certeza é uma péssima opção, já que uma imagem em base64 representa o próprio arquivo da imagem em uma string de tamanho colossal, como se fosse a espécie de um binário da imagem, portanto para manter uma certa consistência e controle dos dados da aplicação resolvi converter a imagem em base64 para um arquivo e armazenar em um serviço específico para isso, e assim acabo enviando apenas o link da imagem para o servidor:

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

-> Notificação e Validação de Formulário

No formulário há muitos dados para serem validados antes de serem enviados ao servidor, é importante sempre fazer o tratamento de dados tanto pelo lado do cliente quanto pelo lado do servidor, também é preciso sempre estar informando o usuário de processos que possam estar ocorrendo na aplicação, por exemplo o carregamento de dados, ou o envio de dados para o backend, e há várias maneiras de informar o usuário sobre estes acontecimentos, desde micro animações como loaders por exemplo, ou uma maneira mais genérica e que me economizou tempo que foi o uso da biblioteca `react-hot-toast`, assim pude exibir uma notificação na interface de qualquer lugar da aplicação, apenas chamando uma função, inclusive retonar os erros da validação do formulário por estas notificações.

```ts
if (eventData.name === "" || eventData.name.length < 3) {
  error("O nome do evento não pode estar vazio e deve conter pelo menos 3 caracteres.")
  return false
}
```

<div align="center">
  <img src="/screens/notify.png" />
</div>

> Então basicamente estas foram as principais tecnologias e implementações adotadas no projeto frontend, tentei manter a maior organização possível mesmo com o curto intervalo de tempo, hoje temos muitas bibliotecas e frameworks que potêncializam o desenvolvimento, tanto front quanto back-end e assim tentei fazer o maior proveito dessas ferramentas.

### Backend

Não gosto muito de falar sobre o backend iniciando a falar sobre bibliotecas ou frameworks, um real sistema backend deve ter seu núcleo, seu domínio onde é independente dessas tecnologias externas, isso já vem de um conceito bastante antigo da programação que é o encapsulamento, um dos princípios da programação orientada a objetos. Portanto começarei a descrever o sistema backend a partir deste núcleo (que deve ser autossustentável e independente) e ir subindo as camadas até a camada de infra, que é onde normalmente há o acoplamento destas tecnologias, assim você pode ter uma noção melhor do fluxo que segui e do porquê das decições.

Então com a interface pronta, e já sabendo que tipos de dados um `Evento` possui, podemos modelar estes dados em nosso sistema backend:

```ts
export class Event {
  #id?: string;
  #name: string;
  #coverImage: string;
  #privacy: 'public' | 'private';
  #description: string;
  #cep: string;
  #number: string;
  #address: string;
  #complement: string;
  #neighborhood: string;
  #city: string;
  #state: string;
  #startDate: Date;
  #startTime: string;

  constructor(properties: IEvent) {
    new EventValidator().ValidateEvent(properties);
    this.#id = properties.id ?? randomUUID();
    this.#name = properties.name;
    this.#coverImage = properties.coverImage;
    this.#privacy = properties.privacy;
    this.#description = properties.description;
    this.#cep = properties.cep;
    this.#number = properties.number;
    this.#address = properties.address;
    this.#complement = properties.complement;
    this.#neighborhood = properties.neighborhood;
    this.#city = properties.city;
    this.#state = properties.state;
    this.#startDate = properties.startDate;
    this.#startTime = properties.startTime;
  }
} 
```

Definindo o que é um evento no backend, podemos começar a tentar interagir com os atributos e propriedades desta classe, ou como é denominado no Domain-driven Design, com esta entidade. Perceba também que no construtor do `Event` já está sendo validado os dados que estão sendo passados para a criação do `Event`, então em nosso backend não haverá um `Event` com dados inválidos, caso contrário um erro é lançado e a instânciação da classe é interrompida.

Agora onde o `Event` está sendo manipulado? Quem é responsável por manipular estes dados e interagir com as instâncias de `Event`? No domain-driven design chamamos a entidade que possui este papel de `service`:

```ts
export class EventService implements IEventService {
  constructor(readonly eventRepository: IEventRepository) {}

  public async createEvent(request: Event): Promise<IEvent> {
    return this.eventRepository
      .create(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async updateEvent(request: Event): Promise<IEvent> {
    return this.eventRepository
      .update(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async deleteEvent(request: { id: string }): Promise<void> {
    return this.eventRepository.delete({ id: request.id }).catch((err) => {
      console.error(err);
      return null;
    });
  }

  public async getById(request: { id: string }): Promise<IEvent> {
    return this.eventRepository
      .find({ id: request.id })
      .then((event) => event?.reflect ?? null)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
 // More methods...
}
```

Um serviço possui o pepel de tratar os dados que vier na requisição, instânciar entidades e interagir com a camada de persistência, na qual em domain-driven design chamados de `repositórios`, é um lugar que armazenará as entidades, então na camada de serviços podemos fazer validações ou aplicar regras de negócios mais complexas antes de salvar em um banco de dados por exemplo. Mas ainda assim, o serviço não depende diretamento do `repositório`, apenas de uma interface abstrata, um contrato, assim como o próprio serviço pode seguir uma interface/contrato que define apenas seus métodos, mas não possui nada implementado de forma concreta: 

```ts
export interface IEventService {
  createEvent(request: Event): Promise<IEvent>;
  updateEvent(request: Event): Promise<IEvent>;
  deleteEvent(request: { id: string }): Promise<void>;
  getById(request: { id: string }): Promise<IEvent>;
  getEvents(): Promise<IEvent[]>;
  getEventsByName(request: { name: string }): Promise<IEvent[]>;
  getEventsWithPagination(request: {
    pageNumber: number;
    pageSize: number;
  }): Promise<IEvent[]>;
}

export interface IEventRepository {
  create(input: Event): Promise<Event>;
  update(input: Event): Promise<Event>;
  delete(input: { id: string }): Promise<void>;
  find(input: { id: string }): Promise<Event | null>;
  getMany(): Promise<Event[]>;
  getByName(input: { name: string }): Promise<Event[]>;
  getWithPagination(input: {
    pageNumber: number;
    pageSize: number;
  }): Promise<Event[]>;
}
```

E a partir de então podemos ter todo o comportamento do sistema já rodando e com as regras de negócios sendo aplicadas, e é daí que vem os testes unitários... podemos testar estas unidades do sistema de forma rápida e precisa, sem depender de nenhum framework ou biblioteca externa, por exemplo, podemos implementar um repositório em memória que persiste os dados em disco: 

```tsx
describe('Event Service', () => {
  let eventService: EventService;

  beforeEach(async () => {
    const inMemoryEventRepository = new InMemoryEventRepository();
    eventService = new EventService(inMemoryEventRepository);
  });

  it('should be possible to create an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const result = await eventService.createEvent(event);
    expect(result).toBeDefined();
    expect(result.name).toBe(eventData.name);
    expect(result.address).toBe(eventData.address);
    expect(result.cep).toBe(eventData.cep);
  });

  it('should be possible update an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const createEventResult = await eventService.createEvent(event);
    const updatedEventData = new Event({
      ...createEventResult,
      name: 'Updated Name',
    });
    const updateEventResult = await eventService.updateEvent(updatedEventData);
    expect(updateEventResult).toBeDefined();
    expect(updateEventResult.id).toBe(createEventResult.id);
    expect(updateEventResult.name).not.toBe(createEventResult.name);
    expect(updateEventResult.name).toBe('Updated Name');
  });

  it('should be throw error if have an empty field', async () => {
    const eventData = makeEvent();
    delete eventData.name;
    expect(() => new Event(eventData)).toThrow('all fields must be filled in');
  });

  it('should be throw error if cep is invalid', async () => {
    const eventData = makeEvent({ cep: '12-10' });
    expect(() => new Event(eventData)).toThrow('the <cep> is invalid');
  });

  it('should be throw error if privacy is invalid', async () => {
    const eventData = makeEvent({ privacy: 'open-to-public' });
    expect(() => new Event(eventData)).toThrow(
      'the <privacy> should only be "public" or "private"',
    );
  });

  it('should be possible delete an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const createEventResult = await eventService.createEvent(event);
    const findEvent = await eventService.getById({ id: createEventResult.id });
    expect(findEvent.id).toBe(event.reflect.id);
    await eventService.deleteEvent({ id: createEventResult.id });
    const findDeletedEvent = await eventService.getById({
      id: createEventResult.id,
    });
    expect(findDeletedEvent).toBe(null);
  });

  it('should be throw error if the id of the event to be deleted does not exist', async () => {
    eventService.deleteEvent({ id: 'invalid-id' }).catch((err) => {
      expect(err.message).toBe('Event not found.');
    });
  });
});
```

Com todo sistema já funcionando eu penso em implementar a camada http/infra, e assim posso tomar decições de arquitetura de alto nível, como o framework a ser utilizado, bibliotecas, banco de dados e entre outras. Mas como acontece no frontend, não precisamos adicionar complexidade ao projeto. Hoje existem frameworks muito barrudos no mercado e que são adotados em grandes empresas que facilitam o desenvolvimento do software sem tirar a graça de programar. 

Como o Next.js é para o React, penso no NestJS é para o Express ou Fastfy, ele possui diversas soluções já prontas, e possui um roteamento de fácil configuração. Neste projeto busquei por agilidade, então basicamente com o núcleo da aplicação pronto, apenas precisei subir um servidor NestJS, e configurar os controllers para chamar os serviços já criados. E por fim fazer a implementação concreta do repositório, optei por fazer com Prisma e MongoDB, o prisma é um ORM que facilita a modelagem de banco de dados e diminui a complexidade na syntaxe para poder realizar consultas para os mesmos.

Optei principalmente pelo MongoDB pelo fato de ter um serviço em nuvem, ou seja, eu posso literalmente subir um banco de dados pela web, obter a URL de conexão e passar para a aplicação backend. Como planajei subir a aplicação rapidamente para o deploy, pensei que seria uma ótima opção já que não precisaria ter que ficar configurando e subindo banco de dados na mão.


![screen](/screens/desktop-my-events.png)

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>




 



