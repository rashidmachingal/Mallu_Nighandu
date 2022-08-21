const mongoose = require("mongoose");

const MeaningSchema = new mongoose.Schema({
  english_word: { type: String},
  part_of_speech: { type: String},
  malayalam_definition: { type: String},
});


module.exports = mongoose.model("Meaning", MeaningSchema);