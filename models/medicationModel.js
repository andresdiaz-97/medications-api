const mongoose = require("mongoose");

const medSchema = mongoose.Schema(
  {
    "nombre-medicamento": {
      type: String,
      required: [true, "Please add a text value"],
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
      required: [true, "Please add a barcode value"],
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
