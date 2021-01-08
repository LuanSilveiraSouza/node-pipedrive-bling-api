<h1 align='center'>
    Pipedrive/Bling API
</h1>

# :pushpin: Sumary

* [Introduction](#paperclip-introduction)
* [Requirements](#clipboard-requirements)
* [Technologies](#computer-technologies)
* [How to Run](#rocket-how-to-run)
* [API Routes](#scroll-api-routes)

# :paperclip: Introduction

This project implements a NodeJS API that integrates with Pipedrive and Bling APIs

# :clipboard: Requirements

* [Get All Deals](requirements/get_all_deals.md)
* [Integrate Pipedrive and Bling](requirements/integrate_pipedrive_bling.md)

# :computer: Technologies

* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [Cron](https://www.npmjs.com/package/cron)
* [MongoDB](https://docs.mongodb.com/drivers/node/)

# :rocket: How to Run

```bash
# Go to server folder
$ cd ./node-pipedrive-bling-api

# Install Packages
$ yarn or npm i
```
Configure your .env file based on .env.example

PORT= (Server port, if not specified the default is 3030)

PIPEDRIVE_URL= (Pipedrive account api url)
PIPEDRIVE_KEY= (Pipedrive api access key)

BLING_URL= (Bling account api url)
BLING_KEY= (Bling api access key)

MONGO_USER= (MongoDBAtlas account user)
MONGO_PASS= (Mongo account pass)
MONGO_DATABASE= (Mongo account database collection)

```bash
# Run Application on Dev mode
$ yarn dev

# Build Application
$ yarn build

# Run Builded Application
$ yarn start
```
Access API at http://localhost:3030/api/v1

# :scroll: API Routes

```bash
Path: '/deals'
Method: GET
Params: { 
    price: 'true'(Optional),
    date: 'true'(Optional),
}
Body: None
Success Return: Status 200 { Deals[] }
Error Return: Status 204 {}
Error Return: Status 404 {}
```

<hr />

Made with :heart: by Luan Souza.
