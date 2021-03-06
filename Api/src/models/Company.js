const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("company", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    propietary_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      //link del perfil de la empresa
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    nationality: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    employees: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [], //id de los empleados asociados a dicha empresa
    },
    posts: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    premium: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM(["active", "disabled"]),
      defaultValue: "active",
    },
    Account: {
      type: DataTypes.ENUM(["User", "Company"]),
      defaultValue: "Company",
    },
  });
};
