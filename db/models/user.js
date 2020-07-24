"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    async isValidPassword(password) {
      try {
        return await bcrypt.compare(password, this.password);
      } catch (err) {
        false;
      }
    }

    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "admin",
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          const hash = await bcrypt.hash(user.password, 10);
          user.password = hash;
        },
      },
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
