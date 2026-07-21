const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Expense Tracker API"
    });
});

// api
app.use("/api/expenses", expenseRoutes);

// Error handling middleware 
app.use(errorHandler);

// Export the app
module.exports = app;