const cocheRepository = require("../repositories/cocheRepository");

exports.getAllCoches = async () => {
  const coches = await cocheRepository.findAllCoches();
  return coches;
};

exports.getCoche = async (id) => {
  const coche = await cocheRepository.findCocheById(id);
  return coche;
};

exports.createCoche = async (coche) => {
  if (!coche.marca && !coche.modelo) throw new Error();
  await cocheRepository.insertCoche(coche);
};

exports.editCoche = async (cocheData, id) => {
  await cocheRepository.editCocheById(cocheData, id);
};

exports.deleteCoche = async (id) => {
  await cocheRepository.deleteCocheById(id);
};
