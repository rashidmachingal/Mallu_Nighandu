const express = require("express");
const router = express.Router();
const Meaning = require("../models/Meaning");

// add new word
router.post("/add-new-word", async (req, res) => {
  try {
    const allItems = req.body;
    allItems.map((i) => {
      const newWord = new Meaning({
        english_word: i.english_word,
        part_of_speech: i.part_of_speech,
        malayalam_definition: i.malayalam_definition,
      });
      newWord.save();
    });
  } catch (error) {
    res.json(error);
  }
});

// get word meaning
router.get("/search/:word", async (req, res) => {
  try {
    const word = await Meaning.find({ english_word: req.params.word });
    if (word.length === 0) {
      const word = [{ status: "notfound", search_word: req.params.word }];
      return res.json(word);
    }
    res.json(word);
  } catch (error) {
    res.json(error);
  }
});

// get all word meaning
router.get("/get-all-words", async (req, res) => {
  try {
    const words = await Meaning.find()
  } catch (error) {
    res.json(error);
  }
});


// practice




module.exports = router;