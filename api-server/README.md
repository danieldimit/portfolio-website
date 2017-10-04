# fakenewsgraph.de - API Server

This server takes the collected tweets from the MongoDB and creates optimized JSON files for the frontend.

## Installing / Getting started

- run `git clone https://github.com/gniewus/FakeNewsNetworkAnalyser.git`
- run `cd api-server`
- run `npm i` or `yarn install`
- run `npm start` or `npm run start-production` for production mode

## Developing

### Built With
NodeJS / Express / Mongoose

### Prerequisites
- Node JS / NPM
- PM2 in production mode

### Building

## Versioning

0.0.1


## Configuration

You need to add a .env file to the root. The server reads following variables:

```
//Port in production
PORT=3000

//Port in development
DEV_PORT=3100

//Mongo DB connection
MONGO_URI=mongodb://localhost/db
```

## Licensing


