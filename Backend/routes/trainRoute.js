const express = require("express");
const router = express.Router();
const {
  TrainDataAdd,
  getTrainData,
  updateTraindata,
  deleteTraindata,
  getTrainbyId,
} = require("../Controller/TrainController");

router
  .route("/train")
  .post(TrainDataAdd)
  .get(getTrainData)
  .put(updateTraindata)
  .delete(deleteTraindata);
router.route("/train/:id").get(getTrainbyId);
module.exports = router;
