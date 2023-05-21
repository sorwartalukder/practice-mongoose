/* 
npm init (after finish press enter)

https://www.typescriptlang.org/  // go to download
npm install typescript --save-dev

npm install express --save

https://mongoosejs.com/    // go to doc   // go to quick start
npm install mongoose --save

https://www.npmjs.com/package/ts-node-dev
npm i ts-node-dev --save-dev
// go to github
 change scripts and add dev line
 "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

https://expressjs.com/en/resources/middleware/cors.html
npm install cors


app.ts
npm i --save-dev @types/express
npm i --save-dev @types/cors
 */


/*
interface -> schema -> model -> model(database query)

Modular system

Interface -> user.interface.ts
Schema, Model  -> user.model.ts

route
route function -> controller.ts
Database Query function -> services

route->controller -> service
*/