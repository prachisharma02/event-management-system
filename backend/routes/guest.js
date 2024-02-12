const express = require("express");
const router = express.Router();
const Guest = require("../model/guest");

router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
