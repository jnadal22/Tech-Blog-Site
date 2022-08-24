const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class blog extends Model {}

blog.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
   blog_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blog_date:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
  },
  description: {
    type: DataTypes.STRING,
  },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Blog',
}
);

module.exports = blog;