const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: String,
    arrival: Date
});

const flightSchema = new Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    destinations: [destinationSchema],
    departs: Date
});




module.exports = mongoose.model('Flight', flightSchema);
