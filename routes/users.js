var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/users")

router.get("/", user_controller.index)
router.get("/:id", user_controller.show)
router.post("/register" , user_controller.create)
router.post("/login", user_controller.login);
router.put("/:id", user_controller.update);
router.delete("/:id", user_controller.destroy);

module.exports = router;