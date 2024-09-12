'use strict';
const { DataTypes } = require('sequelize');
const { SCHEDULE_TABLE } = require('./../models/schedule.model');
const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(SCHEDULE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      day: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      firstStartAt: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      firstEndAt: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      secondStartAt: {
        allowNull: true,
        type: DataTypes.TIME,
      },
      secondEndAt: {
        allowNull: true,
        type: DataTypes.TIME,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
    await queryInterface.addColumn(USER_TABLE, 'pricePerHundredMeters', {
      allowNull: true,
      type: DataTypes.INTEGER,
    });
    await queryInterface.addColumn(USER_TABLE, 'imgLogo', {
      allowNull: true,
      type: DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SCHEDULE_TABLE);
    await queryInterface.removeColumn(USER_TABLE, 'imgLogo');
    await queryInterface.removeColumn(USER_TABLE, 'pricePerHundredMeters');
  },
};
