# cookbook-api
RESTful API for managing recipes

## Table of Contents

- [Requirements](#requirements)

## Requirements

To start this project locally, some prerequisites have to be met first.
Mainly, the following list of tools/frameworks has to be installed:

* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)

If you're using Linux, make sure that  mongo service is running by executing the following command:
```
sudo service mongod start
```

Then, execute 
```
npm install
```
to install the project requirements defined in `package.json` file.

After the requirements are installed, the project is started by executing:
```
npm start
```

The API shoud be available on `localhost:3000`, where you can use a REST client of your choice, or the [CookBook client web application (AngularJS)](https://github.com/AzraAjd/cookbook), to execute `CRUD` operations on available resources, on their respective endpoints.