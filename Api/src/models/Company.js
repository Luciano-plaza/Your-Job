const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('company', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
            }
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        propietary_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url:{
            type: DataTypes.STRING,
            validate:{
                isUrl: true
            }
        },
        image:{
            type: DataTypes.STRING,
            validate:{
                isUrl: true,
            }
        },
        nationality:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.TEXT
        },
        employees:{
            type: DataTypes.ARRAY(DataTypes.INTEGER) //id de los empleados asociados a dicha empresa
        },
        posts:{
            type: DataTypes.ARRAY(DataTypes.INTEGER) //id de los post vinculados a la empresa
        }
    })
}