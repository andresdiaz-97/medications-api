const asyncHandler = require("express-async-handler");

const getMedications = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, message: "Get all the medications" });
});

const getMedication = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get the medication ${req.params.id}` });
});

const addMedication = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res
    .status(200)
    .json({ success: true, message: `Add a medication to the database` });
});

const updateMedication = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update the medication ${req.params.id}`,
  });
});

const deleteMedication = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Medication ${req.params.id} was deleted successfully`,
  });
});

module.exports = {
  getMedications,
  getMedication,
  addMedication,
  updateMedication,
  deleteMedication,
};
