const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {

    },
    slug: {

    },
})

module.exports = mongoose.model('categories', CategorySchema);