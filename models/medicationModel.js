const mongoose = require("mongoose");
const User = require("./userModel");

const medSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    "nombre-medicamento": {
      type: String,
      required: [true, "Por favor añade el nombre del medicamento"],
    },
    bioequivalencia: String,
    tipo_receta: String,
    fraccionable: String,
    cenabast: String,
    dci: String,
    dosis: String,
    "unidad-medida": String,
    "forma-farmaceutica": String,
    administacion: String,
    "registro-isp": String,
    categorizacionoms: String,
    grupo: String,
    referencia: String,
    laboratorio: String,
    rutprovedor: String,
    origen: String,
    "formato-venta": String,
    "tipo-producto": String,
    ean13: {
      type: String,
    },
    "valor-unidad-por-caja": String,
    "metlife-convenio": String,
    "vidacamara-convenio": String,
    "metlife-clase": String,
    "vidacamara-clase": String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Med", medSchema);
