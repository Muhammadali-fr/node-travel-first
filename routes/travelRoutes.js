const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  deleteBook,
  updatedBook,
} = require("../controllers/travelControllers");
// CRUD

router.get("/", getAllTravels);

// add one book
router.post("/", addTravelBook);

// get one travel book
router.get("/:id", getTravelById);

// get one and update
router.put("/:id", updatedBook);
// get one and delete
router.delete("/:id", deleteBook);

module.exports = router;
