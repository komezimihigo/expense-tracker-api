const express = require("express");

const expenseRoutes = require("./routes/expenseRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Expense Tracker API"
    });
});

app.use("/api/expenses", expenseRoutes);

app.use(errorHandler);

module.exports = app;