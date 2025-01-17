const { validate } = require("../models/User");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(409).send("User already exists");
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error in POST /api/users:", error);
    res.status(500).send("internal server error");
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = loginValidator(req.body);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
      });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        error: "Invalid email or password",
      });
    }
    //   const token = user.generateAuthToken();
    //   res.status(200).json({
    //     data: token,
    //     success: "logged in successfully",
    //   });
    // } catch (error) {
    const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      data: token,
      success: "logged in successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

const loginValidator = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return schema.validate(data);
};
