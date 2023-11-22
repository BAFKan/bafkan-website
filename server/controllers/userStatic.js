const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
class UserStatic {
  static async register(req, res, next) {
    try {
      const { fullname, email, password } = req.body;
      let newUser = await User.create({
        fullname,
        email,
        password,
      });
      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please Input Email/Password");
      }
      let user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("NotFound");
      }
      const isValid = comparePassword(password, user.password);
      if (!isValid) {
        throw new Error("Invalid email/password");
      }
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = createToken(payload);
      res.status(200).json({
        access_token: token,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }
}

module.exports = UserStatic;
