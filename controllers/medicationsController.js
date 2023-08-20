const asyncHandler = require("express-async-handler")

const Med = require("../models/medicationModel")

// Get all the medications
const getMedications = asyncHandler(async (req, res, next) => {
  const meds = await Med.find()

  res.status(200).json(meds)
})

// Get a single medication
const getMedication = asyncHandler(async (req, res, next) => {
  const med = await Med.findOne({ ean13: req.params.ean13 })

  res.status(200).json(med)
})

// Get a medication by name
const getMedByName = asyncHandler(async (req, res, next) => {
  //const med = await Med.findOne({ ean13: req.params.ean13 })

  const med = await Med.find({
    "nombre-medicamento": { $regex: req.params.name, $options: "i" },
  })

  res.status(200).json(med)

  //res.status(200).json({ repsonse: req.params.name })

  // try {
  // const med = await req.params
  // res.status(200).json(med)
  // } catch (error) {
  //   console.error(error)
  // }
})

// Insert a new medication
const addMedication = asyncHandler(async (req, res, next) => {
  if (!req.body["nombre-medicamento"]) {
    res.status(400)
    throw new Error("Por favor introduce el nombre del medicamento")
  }

  const med = await Med.create({
    "nombre-medicamento": req.body["nombre-medicamento"],
    ean13: req.body["ean13"],
  })

  res.status(200).json(med)
})

// Update a medication
const updateMedication = asyncHandler(async (req, res, next) => {
  const med = await Med.findById(req.params.id)

  const updatedMed = await Med.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedMed)
})

// Delete a medication
const deleteMedication = asyncHandler(async (req, res, next) => {
  const med = await Med.findById(req.params.id)

  await med.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getMedications,
  getMedication,
  getMedByName,
  addMedication,
  updateMedication,
  deleteMedication,
}
