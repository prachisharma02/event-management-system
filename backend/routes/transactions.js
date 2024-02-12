const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactions");

router.get("/", transactionsController.getTransactions);
router.post("/", transactionsController.createTransaction);
router.get("/:id", transactionsController.getTransactionById);
router.put("/:id", transactionsController.updateTransaction);
router.delete("/:id", transactionsController.deleteTransaction);

module.exports = router;
