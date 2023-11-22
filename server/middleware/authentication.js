const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Unauthorized");
    }

    const access_token = authorization.split(" ")[1];
    const verified = verifyToken(access_token);
    const { id, email } = verified;
    const findUser = await User.findByPk(id);
    if (!findUser) {
      throw new Error("Not Found");
    }

    req.loginInfo = {
      id,
      email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
