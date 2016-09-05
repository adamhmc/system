var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	companyId: String,
	companyName: String, 
	productName: String,
	productPrice: Number,
	note: String,
	lastUpdatedDate: Date
})


module.exports = mongoose.model('Item', ItemSchema);