const express = require("express");
const router = express.Router();
const usersController = require("../controller.js/usercontroller");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

const User = require("../models/userSchema");

router.post("/register", usersController);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
