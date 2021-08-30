const {Router} = require("express");

const router = Router();

const {firstTest, secondTest} = require('../controllers/index.controller');

router.get("/test", firstTest);
router.get("", secondTest)

module.exports = router;