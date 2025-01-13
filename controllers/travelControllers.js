const Travel = require("../models/Travel.model");

// method: get
// descr: get all trevels

const getAllTravels = async (requestAnimationFrame, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "succes",
      travels,
    });
  } catch (err) {
    res.send(err);
  }
};

// method: get
// descr: get one book by id

const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "not found",
      });
    }

    res.status(200).json({
      message: "success",
      travel,
    });
  } catch (err) {
    res.send(err);
  }
};

// method: POST
// descr: add new book

const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const newTravel = await Travel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "succes",
      newTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// method: PUT
// descr: edit book by its id

const updatedBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const updatedBook = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });
    res.status(200).json({
      message: "succes",
      updatedBook,
    });
  } catch (err) {
    res.send(err);
  }
};

// method: DELETE
// descr: delete book by its id

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Travel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "succes you delete this book",
      deletedBook,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  deleteBook,
  updatedBook,
};
