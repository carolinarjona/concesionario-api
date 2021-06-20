const Coche = require("../models/Coche");
const dbConcesionario = require("../config/dbConcesionario");

const loadModels = () => {
  dbConcesionario.sync().then(() => console.log("🚗 Brum brum! 🚙"));
};

module.exports = loadModels;
