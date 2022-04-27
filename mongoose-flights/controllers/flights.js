const Flight = require("../models/flight");

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
    Movie.findById(req.params.id)
      .populate('destination').exec(function(err, movie) {
        // Performer.find({}).where('_id').nin(movie.cast) <-- Mongoose query builder
        // Native MongoDB approach 
        Performer.find(
          {_id: {$nin: flight.destination}},
          function(err, performers) {
            console.log(performers);
            res.render('movies/show', {
              title: 'Movie Detail', movie, performers
            });
          }
        );
      });
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