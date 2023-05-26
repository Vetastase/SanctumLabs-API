const router = require("express").Router();
const mongoose = require("mongoose");

const Card = require("../models/Card.model")

// POST Route for creating a new card
router.post("/cards/create", (req, res, next) => {
const { title, release, description, image, video, genres, media, text } = req.body;
if(media === "miscellanous") {
    Card.create({ title, release, description, image, video, genres, media, text })
.then(response => res.json(response))
.catch(error => res.json(error));
} else {
    Card.create({ title, release, description, image, video, genres, media })
    .then(response => res.json(response))
    .catch(error => res.json(error));
}

})


// Retrieving all cards
router.get("/cards", (req, res, next) => {
    Card.find()
    .then(getCards => res.json(getCards))
    .catch(error => res.json(error));
})

// Find specific card by ID
router.get("/cards/:cardId", (req, res, next) => {
    const { cardId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cardId)) {
        res.status(400).json({ message: "Not a valid ID!" });
        return;
    }

    Card.findById(cardId)
    .then(card => res.status(200).json(card))
    .catch(error => res.json(error));
});

// Update certain cards by ID
router.put("/cards/edit/:cardId", (req, res, next) => {
    const { cardId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cardId)) {
        res.status(400).json({ message: "Not a valid ID!" });
        return;
}

    Card.findByIdAndUpdate(cardId, req.body, { new: true })
    .then((updatedCard) => res.json(updatedCard))
    .catch(error => res.json(error));
    });

// Delete cards
router.delete("/cards/:cardId", (req, res, next) => {
    const { cardId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cardId)) {
        res.status(400).json({ messafe: "Not a valid ID!"});
        return;
    }

    Card.findByIdAndRemove(cardId)
    .then(() => ({ message: `Card with ${cardId} has been removed.` }))
    .catch(error => res.json(error));
});

module.exports = router