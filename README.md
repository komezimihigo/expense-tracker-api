Expense Tracker API

Project Overview

The Expense Tracker API is a RESTful API built using Node.js and Express.js. It allows users to manage their expenses through CRUD (Create, Read, Update, Delete) operations. Instead of using a database, this project stores data in a JavaScript array and is tested using Postman.

This project was developed as part of a group assignment to demonstrate backend development, API design, teamwork, and Git/GitHub collaboration.



Features

- Create a new expense
- Retrieve all expenses
- Retrieve a single expense by ID
- Update an existing expense
- Delete an expense
- Input validation
- Error handling
- Environment variable support
- Postman API testing



Technologies Used

- Node.js
- Express.js
- dotenv
- Nodemon
- JavaScript (ES6)
- Postman
- Git & GitHub



Project Structure

expense-tracker/
│
├── data/
│   └── expenses.js
│
├── controllers/
│   └── expenseController.js
│
├── routes/
│   └── expenseRoutes.js
│
├── middleware/
│   ├── validateExpense.js
│   └── errorHandler.js
│
├── utils/
│   └── generateId.js
│
├── tests/
│   └── postman_collection.json
│
├── app.js
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md



Folder Explanation

data/

Contains the application's data. Since no database is used, all expenses are stored in a JavaScript array.



controllers/

Contains the business logic for the application.

Responsibilities include:

- Getting all expenses
- Getting one expense
- Adding an expense
- Updating an expense
- Deleting an expense



routes/

Defines all API endpoints and connects them to the controller functions.



middleware/

Contains reusable middleware functions.

Examples:

- Request validation
- Error handling



utils/

Contains helper functions that can be reused throughout the application.

Example:

- Automatic ID generation



tests/

Contains the Postman Collection used for testing all API endpoints.



Installation

1. Clone the repository

bash
git clone https://github.com/komezimihigo/expense-tracker-api.git



2. Navigate into the project

bash
cd expense-tracker



3. Install dependencies

bash
npm install




4. Create the environment file

Create a file called

.env


Add

env
PORT=3000



5. Start the server

Production

bash
npm start

Development

bash
npm run dev




Server

The server runs on

http://localhost:3000




API Endpoints

Home

GET /

Returns

json
{
    "message":"Welcome to Expense Tracker API"
}




Get All Expenses

GET


/api/expenses


Response

json
[
    {
        "id":1,
        "description":"Food",
        "amount":500,
        "category":"Food"
    }
]



Get Expense By ID

GET

/api/expenses/:id


Example

GET /api/expenses/1




Create Expense

POST


/api/expenses


Body

json
{
    "description":"Transport",
    "amount":2000,
    "category":"Transport"
}


Response

json
{
    "message":"Expense added successfully"
}




Update Expense

PUT


/api/expenses/:id


Example

json
{
    "description":"Updated Transport",
    "amount":3000,
    "category":"Transport"
}




Delete Expense

DELETE

/api/expenses/:id



Expense Object

Each expense has the following structure.

json
{
    "id":1,
    "description":"Lunch",
    "amount":1500,
    "category":"Food"
}




Validation Rules

Each expense must contain

- description
- amount
- category

The API returns an error if any required field is missing.

Example:

json
{
    "success":false,
    "message":"Amount, description, and category are required"
}




Error Handling

The API returns appropriate HTTP status codes.

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Resource Not Found |
| 500 | Internal Server Error |



Testing

This project is tested using Postman.

Import the provided Postman Collection located in

tests/postman_collection.json

Test all endpoints:

- GET
- POST
- PUT
- DELETE



Naming Conventions

The project follows the following naming conventions.

Files

Use camelCase

Examples

expenseController.js
expenseRoutes.js
generateId.js
validateExpense.js



Variables

Use camelCase

totalExpenses
expenseList
userExpense



Functions

Use camelCase and start with a verb.

Examples


getExpenses()
getExpenseById()
addExpense()
updateExpense()
deleteExpense()
generateId()
validateExpense()




Contributors

Group 3A

kaguyataka6-wq,
Marfo-Thomas01,
Adedokun David,
jaderabbit21,
nhanakhay,
komezimihigo,
Eri-tsu6



License

This project is for educational purposes as part of group assignment.

© 2026 Group 3A



