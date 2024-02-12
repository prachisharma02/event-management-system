const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  try {
    const user = await newUser.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
