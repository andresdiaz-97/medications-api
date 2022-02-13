const express = require("express");
const {
  getMedications,
  getMedication,
  addMedication,
  updateMedication,
  deleteMedication,
} = require("../controllers/medications");
const router = express.Router();

router.route("/").get(getMedications).post(addMedication);

router
  .route("/:id")
  .get(getMedication)
  .put(updateMedication)
  .delete(deleteMedication);

module.exports = router;
