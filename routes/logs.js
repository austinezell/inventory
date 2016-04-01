"use strict"
const router = require("express").Router();
const Item = require('../models/ItemSchema');
const Inventory = require('../models/InventorySchema');
const Order = require('../models/OrderSchema');
const AF = require('../config/ArrayFunctions');

router.put("/takeInventory", (req, res)=>{
  const inven = req.body.inven;
  const update = req.body.update;
  Item.findById(update.itemId)
  .populate("inventoryLogs")
  .exec((err, item)=>{
    if (err) return res.status(477).send(err);
    Inventory.create(inven, (err, inven)=>{
      if (err) return res.status(477).send(err);
      item.inventoryLogs.push(inven);
      item.inventoryLogs = AF.purgeInvenLogs(item.inventoryLogs);
      item[update.key] = update.amount;
      item.save(err=>{
        err ? res.status(477).send(err) : res.end("Alles gut!");
      })
    })
  })
})

router.get("/inventory/:id", (req, res)=>{
  Item.findById(req.params.id)
  .populate("inventoryLogs")
  .exec((err, item)=>{
    err ? res.status(477).send(err) : res.send(item.inventoryLogs)
  })
})


module.exports = router;
