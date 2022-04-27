const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({

    seat: String,
    price: Number,
    flight: {type: Schema.Types.ObjectId, ref: 'Flight'}

})

module.exports = mongoose.model('Ticket', ticketSchema);
