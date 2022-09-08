const express = require("express");
const router = express.Router();
const Meaning = require("../models/Meaning");
const {transporter} = require('./mailConfig')

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

// update word meaning
router.post("/update-word-meaning/:id", async (req,res) => {
  try {
    const updatedWord = await Meaning.findByIdAndUpdate(
      req.params.id,
      {
        $set:req.body,
      },
      {new : true}
    )
    res.json({status:"OK",updatedWord})

    let mailOptions = {
      from: '"Mallu Nighandu" <therashileo@gmail.com>',
      to: 'rashileocontact@gmail.com',
      subject: `${updatedWord.english_word.toUpperCase()} Word Meaning Updated`,
      text: `Hello Rashid,\n
      Updated Word Meaning Details\n
      English Word: ${updatedWord.english_word}\n
      Part Of Speech: ${updatedWord.part_of_speech}\n
      Malayalam Definition: ${updatedWord.malayalam_definition}\n
      Id: ${updatedWord._id}`
    };

    transporter.sendMail(mailOptions)
  } catch (error) {
    res.status(500).json(error);
  }
}) 

module.exports = router;