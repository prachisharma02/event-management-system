const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors");

router.get("/", vendorsController.getVendors);
router.post("/", vendorsController.createVendor);
router.get("/:id", vendorsController.getVendorById);
router.put("/:id", vendorsController.updateVendor);
router.delete("/:id", vendorsController.deleteVendor);

module.exports = router;
