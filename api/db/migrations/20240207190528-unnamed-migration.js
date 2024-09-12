'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('schedules', 'day', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
      unique: false,
    });
    await queryInterface.changeColumn('schedules', 'userId', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      unique: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('schedules', 'day', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.changeColumn('schedules', 'userId', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
};
