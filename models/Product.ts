import mongoose, { Schema, Model, model } from 'mongoose';
import { IProduct } from '../interfaces';

// Structure of a product
const productSchema = new Schema({
  description: { type: String, required: true },
  images: [{ type: String }], // Inside [] when is a attr that can get more than one item, like an array
  inStock: { type: Number, required: true, default: 0 }, // If value not entered, the is a default value added automatically
  price: { type: Number, required: true, default: 0 },
  sizes: [{
    type: String,
    enum: {
      values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], // Allow only this values
      message: '{VALUES} is not a valid size', // Message in case of wrong size entered
    },
  }],
  slug: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: {
      values: ['shirts', 'pants', 'hoodies', 'hats'], // Allow only this values
      message: '{VALUES} is not a valid type of item', // Message in case of wrong size entered
    },
  },
  tags: [{ type: String }],
  title: { type: String, required: true },
  gender: {
    type: String,
    enum: {
      values: ['men', 'women', 'kid', 'unisex'], // Allow only this values
      message: '{VALUES} is not a valid gender', // Message in case of wrong size entered
    },
  },
}, {
  timestamps: true,
});

// TODO: create Mongo index

// Export Product Model found inside MongoDB, or if not, create one based on the schema
const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;
