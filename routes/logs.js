"use strict"
const router = require("express").Router();
const Item = require('../models/ItemSchema');
const Inventory = require('../models/InventorySchema');
const Order = require('../models/OrderSchema');
const AF = require('../config/ArrayFunctions');

router.put("/takeInventory", (req, res)=>{
  Item.findById(req.body.itemId)
  .populate("inventoryLogs")
  .exec((err, item)=>{
    if (err) return res.status(477).send(err);
    Inventory.create(req.body.inventory, (err, inven)=>{
      if (err) return res.status(477).send(err);
      item.inventoryLogs.push(inven);
      item.inventoryLogs = AF.purgeInventoryLogs(item.inventoryLogs);
      const key = `currentAmount${inven.location}`;
      item[key] = inven.amount;
      item.save(err=>{
        err ? res.status(477).send(err) : res.end("Alles gut!");
      })
    })
  })
})


module.exports = router;
