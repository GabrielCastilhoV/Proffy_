
## 📝 Conteúdo
<p align="center">
<a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#getting_started">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#built_using">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#roadmap">Metas de desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 🧐 Sobre <a name = "about"></a>

Proffy é uma Aplicação feita durante a **NWL 1.0** oferecido pela [Rocketseat] :rocket:.<br/> 
A aplicação visa estabelecer um contato entre alunos e professores. O professor ao se cadastrar, informa a matéria que deseja dar aula, os dias disponíveis e horários.
Após isso os alunos podem encontrar esse professor buscando a matéria, dia e hora que batem com a do professor cadastrado.<br/> 

## 🏁 Iniciando <a name = "getting_started"></a>

Instruções de como acessar as rotas e instalação.

### ⚒ Instalando <a name = "installing"></a>

```
git clone https://github.com/GabrielCastilhoV/Proffy_1.0.git

# Go into the backend repository

$ cd Proffy
$ cd backend
yarn

# Configure seu .env baseado no .env.example
$ yarn knex:migrate
$ yarn start
# server inicializado

# 💻 Iniciando com o Front-end
$ cd web
$ yarn
$ yarn start

# 📱 Iniciando com o Mobile

$ cd mobile
$ yarn
$ yarn start
```

## ⛏️ Tecnologias Utilizadas <a name = "built_using"></a>

- 🔵 [TypeScript][typescript]
- 🟢 [Node Js][nodejs]
- ❄️ [Knex][knex]
- ⚛️ [React][reactjs]
- 🔼 [Expo][expo]
- ⚛️ [React Native][reactNative]
- 💅 [Styled-components]

## 👨‍💼 Metas de desenvolvimento <a name = "roadmap"></a>

- Desenvolver o sistema de cadastro/login de usuário.
- Desenvolver o sistema de cadastro de professores.
- Desenvolver o sistema de filtro de professores por dia-materia-hora.
- Desenvolver o sistema de conexão entre alunos e professores.
- Desenvolver o sistema de alteração de dados do usuario.

## 🤔 Como contribuir <a name = "contribute"></a>

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Feito por Gabriel Castilho 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielcastilhov/)

[expo]: https://expo.io/
[knex]:http://knexjs.org/
[nodejs]: https://nodejs.org/en/
[typescript]: https://www.typescriptlang.org/
[reactjs]: https://reactjs.org
[reactNative]: https://reactnative.dev/
[rs]: https://rocketseat.com.br
[Rocketseat]:https://github.com/Rocketseat
[styled-components]:https://styled-components.com/
