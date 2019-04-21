# myBlogApp

This is my blog app with my resume

### Installation

myBlogApp requires [Node.js](https://nodejs.org/) v6+ to run.
Install the dependencies and devDependencies and start the server.

> this project requires mongodb, please be ensure that you have mongodbserver and make changes for db connection in .env

.env-sample 
```sh
$ cd myBlogApp
$ echo MONGODB_STRING=mongodb://localhost/BlogApp > .env
```

If you want to connect cloud of mongodb :
https://codeforgeek.com/2018/03/mongodb-atlas-node-js/

after that;
```sh
$ npm install -g nodemon
$ npm install
$ npm start
```
