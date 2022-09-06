<h4 align="center">
  🚀 TODO API
</h4>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-seeds">Seeds</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-examples">Examples</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-coverage">Coverage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>
</p>

<p align="center">

  <img alt="Language" src="https://img.shields.io/github/languages/top/higorhms/todo-api?style=for-the-badge">

  <a href="https://www.linkedin.com/in/higormartinsdasilva/" target="_blank">
    <img alt="Made by Higor Martins" src="https://img.shields.io/github/languages/count/higorhms/todo-api?style=for-the-badge">
  </a>

  <a href="https://github.com/higorhms/todo-api" target="_blank">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/higorhms/todo-api?style=for-the-badge">
  </a>

   <a href="https://github.com/higorhms/todo-api/stargazers" target="_blank">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/higorhms/todo-api?style=for-the-badge">
  </a>

</p>

## 💻 Project

A Simple GraphQL API using Apollo Server to create and manage TODOS

## 🚀 Seeds

When you start the project, some seeds are going to execute and create a user and todos as example:

`email: example@example.com`
`password: example@123`

So you can use this user to authenticate and test the functionalities.

## 🚀 Examples
![Screen Shot 2022-09-05 at 21 33 10](https://user-images.githubusercontent.com/44821959/188523870-fc4ac1da-b152-4720-ba43-76841b87812a.png)

OBS: Please don't forget to get one JWT token using this example and the credentials above;

mutation Authentication($email: String!, $password: String! ){
 login(email: $email, password: $password)
}


## 🚀 Coverage

Example coverage using JEST
- `yarn test` or `npm run test`

![Screen Shot 2022-09-05 at 21 07 11](https://user-images.githubusercontent.com/44821959/188522427-478bc399-7a9e-4cf2-8e65-9f1658421edc.png)

## 🚀 Technologies

This project was developed using:

- [NodeJS](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [typescript](https://www.typescriptlang.org/)
- [typeorm](https://typeorm.io/)
- [postgres](https://www.postgresql.org/)
- [dotenv]()
- [Apollo](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)


## 🏃‍♂️ Installing and running the project

- Download the project
- Update the .env with your settings
- `yarn` to install the dependencies
- `yarn start:dev`to start the project with your own postgresql database
- `yarn start:compose`to start the project using the docker-compose.yml file
