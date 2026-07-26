const expenses = require("../data/expenses");
const generateId = require("../utils/generateId");

// Get all expenses
const getExpenses = (req, res) => {
    res.status(200).json(expenses);
};

// Get one expense
const getExpenseById = (req, res) => {
    const id = Number(req.params.id);

    const expense = expenses.find(exp => exp.id === id);

    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    res.json(expense);
};

// Add expense
const addExpense = (req, res) => {

    const { title, amount, category, date } = req.body;

    const newExpense = {
        id: generateId(expenses),
        title,
        amount,
        category,
        date
    };

    expenses.push(newExpense);

    res.status(201).json({
        message: "Expense added successfully",
        expense: newExpense
    });
};

// Update expense
const updateExpense = (req, res) => {

    const id = Number(req.params.id);

    const expense = expenses.find(exp => exp.id === id);

    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    const { title, amount, category, date } = req.body;

    expense.title = title;
    expense.amount = amount;
    expense.category = category;
    expense.date = date;

    res.json({
        message: "Expense updated successfully",
        expense
    });
};

// Delete expense
const deleteExpense = (req, res) => {

    const id = Number(req.params.id);

    const index = expenses.findIndex(exp => exp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    const deletedExpense = expenses.splice(index, 1);

    res.json({
        message: "Expense deleted successfully",
        deletedExpense
    });
};

module.exports = {
    getExpenses,
    getExpenseById,
    addExpense,
    updateExpense,
    deleteExpense
};