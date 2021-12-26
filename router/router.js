let express = require("express");
let controller = require("../controller/controller");
const { validate } = require("../middleware/userValidation");
const router = express.Router();

router.post("/register", validate, controller.Registration);

module.exports = router;
