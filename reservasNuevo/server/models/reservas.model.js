const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const ReservaSchema = new mongoose.Schema({
    userID:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "user",
    },
    ubicacionID:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "ubicacion",
    },
    fechaInicial:{
      type:String
    },
    fechaFinal:{
      type:String
    }
});

ReservaSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Reserva = mongoose.model("reserva", ReservaSchema);
module.exports = Reserva;