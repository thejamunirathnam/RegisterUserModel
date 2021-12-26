const service = require("../service/service");

class Registration {
  Registration(req, res) {
    service
      .UserRegistration(req.body)
      .then((result) => {
        return res.status(result.status).send(result);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  }
}

module.exports = new Registration();
