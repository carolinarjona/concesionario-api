const { DataTypes } = require("sequelize");
const dbConcesionario = require("../config/dbConcesionario");
const { TIPO_DE_COCHE, COLOR, PUERTAS } = require("../utils/constants");

const Coche = dbConcesionario.define("Coche", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  puertas: {
    type: DataTypes.ENUM(Object.values(PUERTAS)),
    defaultValue: PUERTAS.TBD,
  },
  tipoDeCoche: {
    type: DataTypes.ENUM(Object.values(TIPO_DE_COCHE)),
    defaultValue: TIPO_DE_COCHE.TBD,
  },
  potencia: {
    type: DataTypes.INTEGER,
  },
  color: {
    type: DataTypes.ENUM(Object.values(COLOR)),
    defaultValue: COLOR.TBD,
  },
  oferta: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  visible: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  vendido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Coche;
