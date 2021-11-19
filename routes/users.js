var express = require('express');
var router = express.Router();
const user_contoller = require("../controllers/users")

router.get("/", user_contoller.index)
router.get("/:id", user_contoller.show)
router.post("/" , user_contoller.create)
router.put("/:id", user_contoller.update);
router.delete("/:id", user_contoller.destroy);

module.exports = router;
