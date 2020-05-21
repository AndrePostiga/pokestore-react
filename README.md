#`Pokestore com Reactjs`
------------------------------

##### `Objetivo`
Desenvolver uma loja utilizando javascript com o framework Reactjs

##### `USO`
A Aplicação utiliza create-react-app para aumentar a produtividade, sem a necessidade de configurar um webpack do zero. Para rodar o projeto basta executar os seguintes comandos dentro do diretório

###### `Variáveis de ambiente`
O projeto contempla diferentes estilos para cada elemento de Pokemon, decidi por implementar apenas 4 estilos de pokemon.
Para rodar as lojas basta passar uma das seguintes variáveis de ambiente:

REACT_APP_THEME=fire
REACT_APP_THEME=grass
REACT_APP_THEME=water
REACT_APP_THEME=psychic

Caso nenhuma variável seja passada, a loja padrão será grass

##### `Ambiente de desenvolvimento`
Para rodar o ambiente de desenvolvimento basta rodar o comando (lembrando de passar a variável de ambiente)

####### `No Windows CMD.exe`
```yarn 
set "REACT_APP_THEME=fire" && yarn start-react
`````
####### `No Windows Powershell`
```yarn 
($env:REACT_APP_THEME = "fire") -and (yarn start)
`````
####### `No Linux/MacOs`
```yarn 
REACT_APP_THEME=fire yarn start-react
`````

##### `Ambiente de produção`
Para rodar o ambiente de produção desenvolvi uma pequeno server em Nodejs + Express. (Não, não é Deno) 
Neste ambiente a aplicação precisa ser buildada antes de ser rodada

Basta rodar os seguintes comandos:
####### `No Windows CMD.exe`
```yarn 
set "REACT_APP_THEME=fire" && yarn build
yarn start
`````

####### `No Linux/MacOs`
```yarn 
REACT_APP_THEME=fire yarn build
yarn start
`````

##### `Testes`
Para rodar os testes da aplicação basta dar o comando
####### `Em qualquer ambiente`
```yarn 
yarn test
`````

A aplicação utiliza uma série de bibliotecas para facilitar e dar agilidade ao desenvolvimento.

* A biblioteca escolhida para fazer os estilos foi a Styled-Components;
* Também foi utilizada as libs do Redux para react, afim de facilitar o gerenciamento de estados dos componentes;
* Para não fazer múltiplas requisições a api, e não perder o estado do carrinho, foi utilizado armazenamento local em SessionStorage de modo que quando o cliente atualizasse a página ele não perdesse o estado anterior, mas caso ele a feche os estados são resetados;
* Para ajudar a desenvolver e ver as actions funcionando, utilizei o Reactotron. Assim eu podia salvar um estado da aplicação e carregar esse estado caso necessário;
* Para ajudar a trabalhar com estados imutáveis, utilizei o immer. Ele faz uma cópia do estado atual para um draft que pode ser alterado como uma lista comum do Js, ao final da função produce ele pega o estado novo e faz internamente os parses para com o estado anterior;
* Para fazer as chamadas a api utilizei o Axios <3
* Algumas outras libs foram utilizadas para ajudar no ambiente de desenvolvimento, como por exemplo o ESLint com configuração do Airbnb, junto ao Prettier, e o Babel;
* E para fazer os testes, utilizei o famoso Jest com o Enzyme, algumas asserções foram feitas utilizando o jest-styled-components.

