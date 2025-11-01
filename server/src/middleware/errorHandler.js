const errorHandler = (err, req, res, next) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    message,
    ...(isDevelopment && { stack: err.stack }),
  });
};

module.exports = errorHandler;
