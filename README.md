# E-Commerce Backend System

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Mock-Up](#mock-up)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)
- [License](#license)

## Description
The E-Commerce Backend System is designed to provide robust API services for managing an e-commerce platform’s inventory. This backend system allows users to perform CRUD operations on products, categories, and tags through a clean and easy-to-use API interface. Developed using Express.js and Sequelize, it connects seamlessly with a PostgreSQL database, ensuring efficient data handling and security.

[Back to Top](#table-of-contents)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

[Back to Top](#table-of-contents)

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

[Back to Top](#table-of-contents)

## Installation

To get this project up and running on your local machine, follow these steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Steps
1. Clone the repository:
   ```bash
   git clone git@github.com:ngojohn2002/13-ORM-E-Commerce-Back-End.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 13-ORM-E-Commerce-Back-End
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and update the following settings with your database credentials:
   ```plaintext
   DB_NAME=ecommerce_db
   DB_USER=yourUsername
   DB_PASSWORD=yourPassword
   ```
5. Run the schema.sql in the PostgreSQL to create your database:
   ```sql
   DROP DATABASE IF EXISTS ecommerce_db;
   CREATE DATABASE ecommerce_db;
   ```
6. Seed the database:
   ```bash
   npm run seed
   ```
7. Start the server:
   ```bash
   npm start
   ```

[Back to Top](#table-of-contents)

## Usage
The server will start on `http://localhost:3001`. You can use API testing tools like Postman or Insomnia to interact with the API.

[Back to Top](#table-of-contents)

## API Endpoints
- `GET /api/categories` - Retrieve all categories
- `POST /api/categories` - Create a new category
- `GET /api/categories/:id` - Retrieve a category by id
- `PUT /api/categories/:id` - Update a category by id
- `DELETE /api/categories/:id` - Delete a category by id

*Similar endpoints exist for products and tags.*

[Back to Top](#table-of-contents)

## Technologies Used
- **Node.js** - JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js** - Web application framework for Node.js.
- **Sequelize** - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **PostgreSQL** - An open source object-relational database system.
- **Dotenv** - A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

[Back to Top](#table-of-contents)

## Contributing
Contributions to this project are welcome! Here are some ways you can contribute:
- Report bugs.
- Add new features.
- Improve documentation.

To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the original branch: `git push origin feature-branch-name`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

[Back to Top](#table-of-contents)

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

[Back to Top](#table-of-contents)

## Walkthrough Video

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the PostgreSQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

Below is the link to a walkthrough video that demonstrates the app's functionality and all of the acceptance criteria being met:



[Back to Top](#table-of-contents)

## Credits

This project was made possible with the help of [ChatGPT](https://chatgpt.com/)

[Back to Top](#table-of-contents)

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

[Back to Top](#table-of-contents)

---

© 2024 - All Rights Reserved.