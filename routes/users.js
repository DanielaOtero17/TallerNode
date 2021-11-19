var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/users")
const auth = require("../middleware/auth");
const modify = require("../middleware/modifyUser");
const userSchema = require("../schemas/userSchema");
const validate = require("../middleware/validate");

router.get("/", user_controller.index)
router.get("/:id", user_controller.show)
router.post("/register", validate(userSchema.user), user_controller.create)
router.post("/login", user_controller.login);
router.put("/:id", auth, modify, user_controller.update);
router.delete("/:id", auth, modify, user_controller.destroy);

module.exports = router;