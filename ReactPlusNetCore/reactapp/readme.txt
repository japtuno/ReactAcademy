Codigo video react + .Net Core -> https://github.com/pkellner/pluralsight-course-react-aspnet-core

/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*CONFIGURAÇÃO DO AMBIENTE/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
1. criar webpack.config.js
2. instalar webpack -> npm install -save-dev webpack
3. npx webpack para executar -> CRIAR OS BUNDLES
4. npm init -> criar nodejs project. iniciar confs server, criar o package.json -> definição de dependencias, etc...
5. npm install webpack-dev-server --save-dev -> criação do webserver
		--save-dev is used to save the package for development purpose. Example: unit tests, minification.. -> no package.json vai para o devDependencies
		--save is used to save the package required for the application to run. -> no package.json vai para o Dependencies
		
		Adicionar no package.json a configuração para iniciar o server:
	
		"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
		"start:dev": "webpack-dev-server --hot"
		},

		Criar um index.html
		
		Em seguinda podemos fazer um npm run start:dev para correr a app -> start:dev vem do package.config
6. npm i -D webpack-cli -> i == install | -D == --save-dev -> são tools do webpack
7. instalar libraria path
8. No webpack.config.js o open: true iniciar automaticamente o browser no run

==React==

9. Instalar react e o Babel para se usar o jsx
	npm install babel-core babel-loader@7 babel-preset-env babel-preset-react babel-preset-stage-2 react react-dom --save
	
	No webpack.config.js é necessário colocar a regra do babel:
	  ...	
	  output: {
		path: PUBLIC_DIR,
		filename: "bundle.js"
	  },
	  devtool: "source-map", -> para efeitos de debugger para fazer o mapping
	  module: {
		rules: [
		  {
			test: /\.js?$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			options: {
			  presets: [
				"react",
				"stage-2",
				["env", { targets: { browsers: ["last 2 versions"] } }]
			  ]
			}
		  }
		]
	  }	
	  
10. Alterar o index.html para carregar o react. Tem de ter um div com id app:
	<div id="app"></div>
	
11. historyApiFallback: true -> Se erro 404, mostra pagina index
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 8080,
    open: true,
    historyApiFallback: true
  },	
	
=Routing=
12. npm install react-router react-router-dom --save
13. ver FullPage.js


export default function FullPage() {

14. npm install webpack-merge -> permite fazer merge de fiches web pack para a questão do cliente / server
	const merge = require("webpack-merge");
	const baseConfig = require("./webpack.base.js");
	...
	//module.exports = config;
	module.exports = merge(baseConfig, config);	

15. Instalar o express -> nodejs server -> a pagina vai ser renderizada no server e não no client. -> só o static. Ver as alteração aos webpack....js -> renderToString
16. https://reactjs.org/docs/react-dom.html#hydrate -> hydrate (ReactDOM.hydrate) é usado em vez do ReactDOM.render se a pagina estiver a ser renderizada no server e só temos de fazer o attach dos eventos.

NOTA: renderizar a pagina no lado do server, torna o carregamento da pagina mais rapido e tratar os 404, de outra modo, renderizado do lado do cliente, recebemos sempre 200.

17. Criar o script para ao fazer build, copiar para a path do .net core
	npm install -npm-run-all rimraf cpx --save
	
	No package.json, criar as entradas para o build
	
    "prod:bundlefordeploy": "npx webpack --config webpack.client.js",
    "prod:cleanwwwroot": "npx rimraf ../WebApp/src/WebApp/wwwroot",
    "prod:copytowwwroot": "npx cpx public/**/* ../WebApp/src/WebApp/wwwroot",
    "deploy": "npx npm-run-all --serial prod:**"

	> npm run deploy