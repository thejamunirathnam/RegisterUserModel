const model = require("../model/model");
const mailer = require('../middleware/nodeMailer')
const userModel = new model.UserModel();
const newmodel = model.User;

class Service {
  async UserRegistration(obj) {
    let foundUser = await userModel.findUser(obj);
    let len = foundUser.data.length;
    if (len == 0) {
      let newuser = new newmodel({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
      });

      let savedData =await userModel.RegisterUser(newuser);
      await mailer.sendMail(obj.email);
      return savedData;
    } else {
      return foundUser;
    }
  }
}

module.exports = new Service();
