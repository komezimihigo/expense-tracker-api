const generateId = (expenses) => {
    if (expenses.length === 0) {
        return 1;
    }

    return expenses[expenses.length - 1].id + 1;
};

module.exports = generateId;
