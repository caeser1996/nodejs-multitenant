import uuid from "uuid/v4";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("user_master", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      firstName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      lastName: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      changedPassword: {
        type: Sequelize.STRING,
        allowNull: true
      },
      schemaName:{
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    },{schema: 'public'}),

  down: queryInterface => queryInterface.dropTable("user_master")
};
