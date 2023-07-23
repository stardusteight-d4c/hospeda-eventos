+ Adicionar tratamento/validação de dados e regras de negócios na camada de serviço;
+ Fazer Testes, ver se está retornando os erros adequados;
+ Fazer controllers, integrando com a camada de serviço, utilizando o repositório em memória;
- Fazer integração da API com o front-end;
- Fazer a implementação concreta do repositório.


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