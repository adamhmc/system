var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	companyId: String,
	companyName: String, 
	productName: String,
	productPrice: Number
})


module.exports = mongoose.model('Item', ItemSchema);