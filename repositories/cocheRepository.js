const Coche = require("../models/Coche");

exports.findAllCoches = async () => {
  return await Coche.findAll();
};

exports.findCocheById = async (id) => {
  return await Coche.findOne({ where: { id } });
};

exports.insertCoche = async (coche) => {
  return await Coche.create(coche);
};

exports.deleteCocheById = async (id) => {
  return await Coche.destroy({ where: { id } });
};

exports.editCocheById = async (cocheData, id) => {
  return await Coche.update(cocheData, { where: { id } });
};
