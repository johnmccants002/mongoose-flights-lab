const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

function newFlight(req, res) {

    res.render('flights/new');
}

function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body);

// Format the date for the value attribute of the input

    if (req.body.airport === undefined) {
        req.body.airport = "DEN"
    }
    flight.save(function (err) {
        if (err) return res.render('flights/new');

        res.redirect('flights')
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { 
                title: "Details",
                flight,
                tickets
            })
          });
        
    })
  }

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        }); 
    });
}



module.exports = {
    index,
    show,
    new: newFlight,
    create
}