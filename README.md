# E-Commerce Backend System

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description
The E-Commerce Backend System is designed to provide robust API services for managing an e-commerce platform’s inventory. This backend system allows users to perform CRUD operations on products, categories, and tags through a clean and easy-to-use API interface. Developed using Express.js and Sequelize, it connects seamlessly with a PostgreSQL database, ensuring efficient data handling and security.

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

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

[Back to Top](#table-of-contents)
