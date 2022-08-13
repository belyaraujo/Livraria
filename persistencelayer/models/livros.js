const mongoose = require("mongoose")

const livros = new mongoose.Schema({
    titulo: String,
          autor: String,
		      valor: String,
})

module.exports = mongoose.model("livros", livros)