var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets")

router.get("/", ticketsCtrl.index);
/* GET users listing. */
router.get("/new", ticketsCtrl.new);

router.post("/", ticketsCtrl.create);

module.exports = router;