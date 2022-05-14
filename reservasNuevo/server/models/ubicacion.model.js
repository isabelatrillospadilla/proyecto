const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const UbicacionSchema = new mongoose.Schema({
	nombreUbicacion:{
		type: String,
	},	
		
});

UbicacionSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Ubicacion = mongoose.model("ubicacion", UbicacionSchema);
module.exports = Ubicacion;