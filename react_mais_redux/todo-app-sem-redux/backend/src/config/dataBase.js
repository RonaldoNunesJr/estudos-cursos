const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

module.export = mongoose.connect('mongodb://localhost/todos');