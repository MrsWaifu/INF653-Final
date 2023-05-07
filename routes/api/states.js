const express = require("express");
const router = express.Router();
const statesController = require("../../controllers/statesController");
const verifyStates = require("../../middleware/verifyStates");
router.route("/").get(statesController.getAllStates);

router
  .use("/:state", verifyStates)
  .route("/:state/funfact")
  .get(statesController.getFunFacts)
  .post(statesController.createNewFunFacts)
  .patch(statesController.updateFunFacts)
  .delete(statesController.deleteFunFacts);

router.route("/:state").get(statesController.getState);

router.route("/:state/capital").get(statesController.getStateCapital);
router.route("/:state/nickname").get(statesController.getStateNickname);
router.route("/:state/population").get(statesController.getStatePopulation);
router.route("/:state/admission").get(statesController.getStateAdmission);

module.exports = router;