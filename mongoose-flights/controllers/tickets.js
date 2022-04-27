const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`tickets/new`, { 
            title: "New Ticket",
            flight
        });
    });
}
   
function create(req,res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) return res.render('tickets/new');

        res.redirect(`/flights/${ticket.flight}`);
    });
}

// function create(req,res) {
//     req.body.flight = req.params.id
//     console.log(req.body)
//     Ticket.create(req.body,  function(err, ticket) {
//         console.log("Inside the create function")
//         res.redirect(`/flights/${ticket.flight}`);
//       });
// }

module.exports = {
    new: newTicket,
    create
}