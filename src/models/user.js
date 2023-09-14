'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],  // Password must be between 8 and 50 characters
      },  
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,  // Only allow numbers
        len: [10, 15],    // Allow phone numbers between 10 and 15 digits
      },
    },
    language: {
      type: DataTypes.STRING,
      defaultValue: 'English',
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: 'USD',
    },
    dateOfBirth: DataTypes.DATE,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: 18,  // Age must be at least 18
      },
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    profilePhoto: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    bio: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 200] // 200 characters max
      },
    },
    isSuspended: DataTypes.BOOLEAN,
    preferredContactMethod: DataTypes.ENUM('Email', 'Phone', 'SMS'),
    lastLogin: DataTypes.DATE,
    termsAccepted: DataTypes.BOOLEAN,
    externalIds: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};