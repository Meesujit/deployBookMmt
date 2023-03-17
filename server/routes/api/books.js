const { Router } = require("express")
const express = require("express")
const router = express.Router()



const Book = require("../../models/Book")

router.get("/test", (req,res) =>{
    res.send("Book Test Route is working fine")
})

router.get("/",(req,res)=>{
     Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'No Books found'}))
})

router.get("/:id",(req, res) =>{
     Book.findById(req.params.id)
     .then(books => res.json(book))
    .catch(err => res.status(404).json({nobooksfound: "No Books found"}))
})

router.post("/",(req,res)=>{   
    Book.create(req.body)
    .then(books => res.json({msg: `Book added successfully`}))
    .catch(err => res.status(404).json({error: "unable to add the book"}))
})

router.put("/:id",(req,res)=>{
    // function of mongodb find in book
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(books => res.json({msg: `Update successfully`}))    
    .catch(err => res.status(404).json({error: "Unable to update the database details"}));
})

router.delete("/:id",(req,res)=>{
    // function of mongodb find in book
    Book.findByIdAndRemove(req.params.id, req.body)
    .then(books => res.json({msg: `Book Entry deleted Successfully`}))    
    .catch(err => res.status(404).json({error: "No such a book"}));
})

module.exports = router
