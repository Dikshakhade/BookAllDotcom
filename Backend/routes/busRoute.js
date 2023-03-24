const express = require("express");
const router = express.Router();
const {
  BusDataAdd,
  getBusdata,
  updateBusdata,
  deleteBusdata,
} = require("../Controller/BusController");

router.route("/bus").post(BusDataAdd);
router.route("/bus").get(getBusdata).put(updateBusdata).delete(deleteBusdata);
module.exports = router;
