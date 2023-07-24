:brazil: <a href="https://github.com/stardusteight-d4c">Go to english version</a>

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

* TypeScript
* React
* Next.js
* Server Components
* TailwindCSS
* Supabase
* React Awesome Reveal
    
### Backend

* TypeScript
* NestJS
* Express
* Prisma
* MongoDB
* Unitary Tests
* Domain-driven Design

## :mailbox_with_mail: Utilitários
 
### Frontend

- <a href="https://react.dev/" target="_blank">React.js 18</a> & <a href="https://nextjs.org/" target="_blank">Next.js 13</a>

Tendo o protótipo da interface em mãos, eu decidi começar o desenvolvimento da aplicação pelo projeto da interface web, então como um dos requisitos é utilizar React na aplicação frontend, optei por começar um projeto utilizando um framework que trabalha em cima do React e que é recomendado pela própria documentação oficial do React 18, o Next.js. O Next.js adiciona alguns recursos muito úteis e que facilitam o desenvolvimento de aplicações frontend em React, vejamos alguns casos de uso do Next e React nesta aplicação:

Utilizando o framework Next junto com uma nova feature do React 18 denominada de Server Components, podemos fazer requisições e cachear as mesmas requisições através de um servidor Node.js fornecido pelo Next.js que fica rodando por de trás dos panos em uma aplicação frontend, ou seja, ao invés de entregar os arquivos para o cliente Browser no frontend para 100 usuários por exemplo e fazer as requisições pelo lado do cliente (que seriam `100 requisições`), podemons simplesmente fazer `uma única requisição no servidor` Node do Next e com os Server Components podemos fazer as requisições dentro dos próprios componentes da interface e enviar os componentes já com os dados populados. 

Isto melhora a performance da aplicação drasticamente e reduz a quantidade de JavaScript sendo executado no Cliente Browser, e assim com o Next.js podemos criar até mesmo um servidor completo que oferece um serviço de API pelo próprio projeto frontend. Então atualmente o uso de um framework frontend é indispensável para um desenvolvimento ágil e que acrescente maior valor a aplicação de uma forma simples, com soluções já prontas e eficientes.

- <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>

Adotei o uso do TailwindCSS nesta aplicação como costumo fazer nas minhas demais aplicações, mas por que Tailwind? 

O frontend é uma camada do projeto que não precisa de complexidade adicionais, não precisamos perder tempo resolvendo problemas de estilizações e tendo que configurar trocentos arquivos CSS e saber onde que cada classe está definida e tudo mais... o Tailwind mata esse problema pela raiz, com ele os desenvolvedores podem escrever suas estilizações no próprio elemento e deixar as mesmas diretamente acopladas ao elemento HTML sem ter que ficar caçando classes em arquivos CSS. Então o TailwindCSS é um framework CSS de classes utilitárias que potêncializa a produtividade na criação de interfaces e diminiu a sua complexidade.

- <a href="https://supabase.com/" target="_blank">Supabase Storage</a>


  







 



