# js-starter
starter project for javascript with useful tooling

Modern javascript has tons of tooling requirements. This project has a few starter configuration that helps me get started.
1. Live code reloading 
2. Code bundling 
3. ES6 syntax support 
4. Code linting 
5. Minification 

# How to get started
```
git clone https://github.com/addamit/js-starter
npm install
npm run dev 
```
This should open a local webpage in your browser at http://127.0.0.1:9000/ with live code reloading. Start editing code in index.js under src folder to see changes. All contents are served from dist/ folder. See webpack.config.js for configuraiton 


# Development 
The above project package.json file was generated using the below commands. 
```
npm init -y
npm install -D babel-loader @babel/core @babel/preset-env webpack
npm install webpack-dev-server --save-dev
npm install webpack-cli --save-dev
npx webpack-cli init
npx webpack-dev-server
```