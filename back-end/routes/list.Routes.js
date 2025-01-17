const express = require("express");
const multer = require("multer");
const {
  createAnimal,
  getAdoptableAnimals,
  updateAnimalStatus,
  getAnimalById,
} = require("../controllers/list.Controller");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/list-animal", upload.single("image"), createAnimal);
router.get("/adopt-animals", getAdoptableAnimals);
router.get("/adopt-animals/:id", getAnimalById);
router.patch("/adopt-animal/:id", updateAnimalStatus);

module.exports = router;
