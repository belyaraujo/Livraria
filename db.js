const mongoose = require("mongoose")

function connecttodatabase() {
    mongoose.connect("mongodb+srv://belyaraujo:12345@cluster0.lgpwa4g.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection
    db.on("error", (error) => console.error(error))
    db.once("open", () => console.log("Conectado na base de dados"))
}


module.exports = connecttodatabase