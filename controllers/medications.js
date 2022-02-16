const asyncHandler = require("express-async-handler");

const Med = require("../models/medicationModel");

// Get all the medications
const getMedications = asyncHandler(async (req, res, next) => {
  const meds = await Med.find();

  res.status(200).json(meds);
});

// Get a single medication
const getMedication = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get the medication ${req.params.id}` });
});

// Insert a new medication
const addMedication = asyncHandler(async (req, res, next) => {
  if (!req.body["nombre-medicamento"]) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const med = await Med.create({
    "nombre-medicamento": req.body["nombre-medicamento"],
    ean13: req.body["ean13"],
  });

  res.status(200).json(med);
});

// Update a medication
const updateMedication = asyncHandler(async (req, res, next) => {
  const med = await Med.findById(req.params.id);

  if (!med) {
    res.status(400);
    throw new Error("Medication not found");
  }

  const updatedMed = await Med.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMed);
});

// Delete a medication
const deleteMedication = asyncHandler(async (req, res, next) => {
  const med = await Med.findById(req.params.id);

  if (!med) {
    res.status(400);
    throw new Error("Medication not found");
  }

  await med.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMedications,
  getMedication,
  addMedication,
  updateMedication,
  deleteMedication,
};
