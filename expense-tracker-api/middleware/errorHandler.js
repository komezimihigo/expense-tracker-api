// middleware/errorHandler.js

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message: message,
    // Include error details only in development
    ...(process.env.NODE_ENV === 'development' && { error: err.stack })
  });
};

module.exports = errorHandler;
