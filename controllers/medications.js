exports.getMedications = (req, res, next) => {
  res.status(200).json({ success: true, message: "Get all the medications" });
};

exports.getMedication = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get the medication ${req.params.id}` });
};

exports.addMedication = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Add a medication to the database` });
};

exports.updateMedication = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update the medication ${req.params.id}`,
  });
};

exports.deleteMedication = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Medication ${req.params.id} was deleted successfully`,
  });
};
