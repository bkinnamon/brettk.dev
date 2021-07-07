---
category: posts
title: 'Backend: Part 1'
date: 2019-10-30T16:12:14.827Z
---
I've never enjoyed backend development. It always felt like a HUGE paradigm shift that I wasn't able to make. I've spent the past week working on an app with ExpressJS and MongoDB. I'm happy to say that I've enjoyed it this time around.

<!-- end -->

### Enter ExpressJS and MongoDB/Mongoose

The first step that I take to setting up a project is building the initial structure.

### Project Folder and Git

To kick it off I'll setup the project folder and initialize git. I use a standard `.gitignore` file from github.

```bash
mkdir hello-backend
cd hello-backend
git init
curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -o .gitignore
```

### NodeJS

Next I'll get the `npm` project initialized and install my dependancies.
* `express` allows us to spin up a web server.
* `mongoose` provides an object relational mapping (ORM) framework that integrates with MongoDB.
* `dotenv` allows us to keep our passwords private.
* `nodemon` will reload the development server when we make a change to our code.

```bash
npm init -y
npm i express mongoose dotenv
npm i -D nodemon
```

### Main

Now I'll setup the web apps entry point, `src/main.js`.

```bash
mkdir src
touch src/main.js
```

### Package.json

The last step is to configure a `package.json` `script`. The filename, `src/main.js`, is where our app will start. You can organize your files how you want.

```json
{
 "scripts": {
   "dev": "nodemon src/main.js"
 }
}
```

### MongoDB

One last thing to setup is MongoDB. It's not too difficult to get a [local MongoDB instance running using docker](https://hub.docker.com/_/mongo). Also, you can use [Atlas](https://www.mongodb.com/cloud/atlas), a cloud service from MongoDB.

### Setup Complete

Now that setup is complete, we can start coding... in part 2.
