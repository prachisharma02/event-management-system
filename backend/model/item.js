const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = Schema(
  {
    name: { type: String, required: true },
    vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String },
    availableQuantity: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
