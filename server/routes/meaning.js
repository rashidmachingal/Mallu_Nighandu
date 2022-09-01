const express = require("express");
const router = express.Router();
const Meaning = require("../models/Meaning");
const fs = require("fs")


// add new word
router.post("/add-new-word", async (req, res) => {
  try {
    const allItems = req.body;
    allItems.map( async (i) => {
      const newWord = new Meaning({
        english_word: i.english_word,
        part_of_speech: i.part_of_speech,
        malayalam_definition: i.malayalam_definition,
      });
      newWord.save();
      res.json({status:"OK"})
    });
  } catch (error) {
    res.json(error);
  }
});

// get word meaning
router.get("/search/:word", async (req, res) => {
  try {
    let word = await Meaning.find({ english_word: req.params.word });

    if (word.length === 0) {
      const word = [{ status: "notfound", search_word: req.params.word }];
      return res.json(word);
    }

    res.json(word);
  } catch (error) {
    res.json(error);
  }
});

// get search_keywords
router.get("/get-search-keywords", async (req,res) => {
  try {
    let search_keywords = await Meaning.find({ english_word: req.params.word });
    res.json(search_keywords)
    
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;