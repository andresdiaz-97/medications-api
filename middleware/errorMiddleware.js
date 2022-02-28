const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;

  console.log(`this is the error name: ${err.name}`);

  if (err.name === "CastError") {
    err.message = `No existe ningun recurso con el id ${err.value}`;
    statusCode = 400;
  }

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
