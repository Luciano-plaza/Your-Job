const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "ForumPosts",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: { type: DataTypes.STRING, allowNull: false },
      picture: { type: DataTypes.STRING, defaultValue: "" },
    },
    { timestamps: true }
  );
};
