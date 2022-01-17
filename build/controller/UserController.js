"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SALT_ROUND = 10;

const signup = async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    phone
  } = req.body;
  let hashPassword = password;
  hashPassword = await _bcrypt.default.hash(hashPassword, SALT_ROUND);

  try {
    const result = await req.context.models.users.create({
      user_name: username,
      user_firstname: firstname,
      user_lastname: lastname,
      user_email: email,
      user_password: hashPassword,
      user_phone: phone
    });
    const {
      user_name,
      user_firstname,
      user_lastname,
      user_email,
      user_phone
    } = result.dataValues;
    res.send({
      user_name,
      user_firstname,
      user_lastname,
      user_email,
      user_phone
    });
  } catch (error) {
    // res.status(404).send(error);
    return res.status(404).send("no data input");
  }
};

const update = async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    phone
  } = req.body;
  let hashPassword = password;
  hashPassword = await _bcrypt.default.hash(hashPassword, SALT_ROUND);

  try {
    const result = await req.context.models.users.update({
      user_name: username,
      user_firstname: firstname,
      user_lastname: lastname,
      user_email: email,
      user_password: hashPassword,
      user_phone: phone
    }, {
      returning: true,
      where: {
        user_id: req.params.id
      }
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data update");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.users.findOne({
      where: {
        user_id: req.params.id
      }
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("not found");
  }
};

const deleteRow = async (req, res) => {
  try {
    const result = await req.context.models.users.destroy({
      where: {
        user_id: req.params.id
      }
    });
    res.send("delete" + result + "rows");
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findAll = async (req, res) => {
  try {
    const result = await req.context.models.users.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const signin = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const result = await req.context.models.users.findOne({
      where: {
        user_email: email
      }
    });
    const {
      user_password
    } = result.dataValues;
    const compare = await _bcrypt.default.compare(password, user_password);

    if (compare) {
      return res.send("sign in succeed");
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    return res.sendStatus(404);
  }
};

var _default = {
  signup,
  update,
  findOne,
  deleteRow,
  findAll,
  signin
};
exports.default = _default;
//# sourceMappingURL=UserController.js.map