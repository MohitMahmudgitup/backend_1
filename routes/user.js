const express = require("express");
const {
  hendleGetAllUsers,
  hendlePostAllUsers,
  hendlegetUserByID,
  hendlepatchUserByID,
  hendledeleteUserByID
} = require('../controllers/user')
const router = express.Router();

//Routes

router
  .route("/")
  .get(hendleGetAllUsers)
  .post(hendlePostAllUsers)

router
  .route(`/:id`)
  .get(hendlegetUserByID)
  .patch(hendlepatchUserByID)
  .delete(hendledeleteUserByID);

module.exports = router;
