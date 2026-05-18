import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: {
      type: String,
      requred: true,
    },
    publishYear: {
      type: Number,
      requred: true,
    },
  },
  { timestamps: true },
);

export const Book = mongoose.model('Cat', bookSchema);