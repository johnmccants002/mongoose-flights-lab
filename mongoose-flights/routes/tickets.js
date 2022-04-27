var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets")

// router.get("/", ticketsCtrl.index);
// /* GET users listing. */
router.get("/flights/:id/tickets/new", ticketsCtrl.new);
router.post("/flights/:id/tickets/new", ticketsCtrl.create);


module.exports = router;