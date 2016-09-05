var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	companyId: String,
	companyName: String, 
	productName: String,
	productPrice: Number,
	note: String,
	lastUpdatedDate: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Item', ItemSchema);