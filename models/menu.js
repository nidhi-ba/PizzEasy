const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the menu
const menuSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true }
});

// Create the model from the schema
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
