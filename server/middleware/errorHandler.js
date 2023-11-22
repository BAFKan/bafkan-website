function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let msg = "Internal Server Error";

  console.log(err);
  if (err.name === "SequelizeUniqueConstraintError") {
    statusCode = 400;
    msg = err.errors[0].message;
  }
  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    msg = err.errors[0].message;
  }
  if (err.message === "Please Input Email/Password") {
    statusCode = 400;
    msg = err.message;
  }
  if (err.message === "NotFound") {
    statusCode = 404;
    msg = "user not found";
  }
  if (err.message === "Not Found") {
    statusCode = 404;
    msg = err.message;
  }

  if (err.message === "Invalid email/password") {
    statusCode = 401;
    msg = "Invalid Email/Password";
  }

  if (err.message === "Unauthorized") {
    statusCode = 401;
    msg = "You're Not Authenticated";
  }

  res.status(statusCode).json({
    statusCode,
    msg,
  });
}

module.exports = errorHandler;
