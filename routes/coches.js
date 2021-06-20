var express = require("express");
var router = express.Router();
const cocheService = require("../services/cocheServices");

router.get("/", async (req, res) => {
  try {
    const coches = await cocheService.getAllCoches();
    res.status(200).json(coches);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coche = await cocheService.getCoche(id);
    res.status(200).json(coche);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await cocheService.createCoche(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await cocheService.editCoche(req.body, id);
    res.status(202).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await cocheService.deleteCoche(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
