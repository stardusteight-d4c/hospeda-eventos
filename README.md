 - Adicionar animações;
 - (storage) Subir arquivo da imagem para o Subabase/Firebase e mandar apenas o link para o servidor; 
 - Fazer busca por eventos;
 - Fazer a implementação concreta do repositório com Prisma e MongoDB.

Segunda feira:
 - Dar os ajustes finais até 17:00 e Documentar o projeto explicando a decisão de cada tecnologia, listar features adicionadas e suas tecnologias (documentar em português);

<hr>

### Hospeda Eventos
#### Technical Challenge

 - Goal
> The objective of this challenge is to develop an event listing and registration system using React.js in the frontend and Node.js in the backend. The system must follow the prototype provided in Figma as a visual reference.

### Frontend
- Develop the system's frontend in React.js, preferably in typescript.
- Develop the system faithfully following Figma's prototype.
- Implement the event listing according to the prototype.
- Allow creation, edition and deletion of events.

### Backend
- Create the system backend in Node.js.
- Define the routes necessary to carry out the operations of listing, registering, editing and deleting events.
- Use a RESTful or GraphQL approach for server requests.

### Instructions
- Create a GitHub repository for the project.
- Develop the frontend and backend following the specifications.
- Use the technologies and frameworks you deem appropriate for the project.
- Implement interface responsiveness for different screen sizes.
- The project must be delivered by the established deadline (Tuesday, the 25th).
- Send the GitHub repository link containing the project code by WhatsApp.

### Prototype

https://www.figma.com/file/L62JBZt5wnyzZQEgUw1FOC/Prova-Tecnica---Hospeda-Eventos
?type=design&node-id=0%3A1&mode=design&t=SHIIMvOrZsKc7JpZ-1

Feel free to use libraries and tools that facilitate development.

> Remember to document the project and explain any major decisions made during the development.

<hr>


No Express a ordem dos endpoints importa: 

So basically, the ordering matters. Ensure that endpoint with wildcard (e.g. :id) is registered after static route.

```ts
// GOOD ORDER
@Get('me') 
getProfile() {
  return 'Me';
}

@Get(':id')
findOne(@Param('id') id) {
  return id;
}
```

```ts
// WRONG ORDER
@Get(':id')
findOne(@Param('id') id) {
  return id;
}

@Get('me')
getProfile() {
  return 'Me';
}
```