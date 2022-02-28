const express = require("express");
const {
  getMedications,
  getMedication,
  addMedication,
  updateMedication,
  deleteMedication,
} = require("../controllers/medicationsController");
const router = express.Router();
const { authorize, protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(getMedications)
  .post(protect, authorize("admin"), addMedication);

router.route("/:ean13").get(getMedication);

router
  .route("/:id")
  .put(protect, authorize("admin"), updateMedication)
  .delete(protect, authorize("admin"), deleteMedication);

module.exports = router;
