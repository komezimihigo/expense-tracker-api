// middleware/validateExpense.js

// Middleware to validate expense data before processing
const validateExpense = (req, res, next) => {
  const { amount, description, category, date } = req.body;

  // Check if all required fields exist
  if (!amount || !description || !category) {
    return res.status(400).json({
      success: false,
      message: "Amount, description, and category are required"
    });
  }

  // Check if amount is a positive number
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Amount must be a positive number"
    });
  }

  // Check if description is not empty
  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({
      success: false,
      message: "Description must be a non-empty string"
    });
  }

  // Check if category is valid
  const validCategories = ['food', 'transport', 'entertainment', 'utilities', 'other'];
  if (!validCategories.includes(category.toLowerCase())) {
    return res.status(400).json({
      success: false,
      message: `Category must be one of: ${validCategories.join(', ')}`
    });
  }

  // Check if date is valid (if provided)
  if (date && isNaN(new Date(date))) {
    return res.status(400).json({
      success: false,
      message: "Invalid date format"
    });
  }

  // All checks passed, move to next middleware/controller
  next();
};

module.exports = validateExpense;
