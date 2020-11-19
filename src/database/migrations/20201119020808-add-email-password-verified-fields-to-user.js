module.exports = {
  up: async (queryInterface, Sequelize) => [
    queryInterface.addColumn('user', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    queryInterface.addColumn('user', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    queryInterface.addColumn('user', 'verified', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }),
  ],

  down: async (queryInterface) => [
    queryInterface.removeColumn('user', 'email'),
    queryInterface.removeColumn('user', 'password'),
    queryInterface.removeColumn('user', 'verified'),
  ],
};
