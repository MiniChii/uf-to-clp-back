const express = require("express");
const router = express.Router();
const historialController = require("../../controller/historialController");

router.get("/", (req, res) => {
  historialController.getAllConversions(req, res);
});

router.post("/", (req, res) => {
  historialController.createConversion(req, res);
});

module.exports = router;
