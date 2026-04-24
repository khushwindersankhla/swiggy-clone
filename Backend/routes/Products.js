

const express = require("express");
const router = express.Router();
const Pizza = require("../models/Student");

router.post("/add", async(req,res)=>{
 const pizza = new Pizza(req.body)
 await pizza.save()
 res.send(pizza)
})

router.get("/all", async(req,res)=>{w
    
 const pizzas = await Pizza.find()
 res.send(pizzas)
})

module.exports = router