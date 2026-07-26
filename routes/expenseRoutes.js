const express = require("express");

const router = express.Router();

const {
    getExpenses,
    getExpenseById,
    addExpense,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController");

const validateExpense = require("../middleware/validateExpense");

// GET all expenses
router.get("/", getExpenses);

// GET one expense
router.get("/:id", getExpenseById);

// POST new expense
router.post("/", validateExpense, addExpense);

// PUT update expense
router.put("/:id", validateExpense, updateExpense);

// DELETE expense
router.delete("/:id", deleteExpense);

module.exports = router;
