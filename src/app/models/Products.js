import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      require: true,
    },
    rating: {
      type: String,
      require: true,
    },
    stock: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Products ||
  mongoose.model("Products", productsSchema);
