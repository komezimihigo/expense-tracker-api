const validateExpense = (req, res, next) => {

    const { title, amount, category, date } = req.body;

    if (!title || !amount || !category || !date) {
        return res.status(400).json({
            message: "Please provide title, amount, category and date."
        });
    }

    if (typeof amount !== "number") {
        return res.status(400).json({
            message: "Amount must be a number."
        });
    }

    next();
};

module.exports = validateExpense;
