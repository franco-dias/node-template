module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('book', [
    { name: 'Fortaleza Digital', created_at: new Date(), updated_at: new Date() },
    { name: 'Ponto de Impacto', created_at: new Date(), updated_at: new Date() },
    { name: 'O código da Vinci', created_at: new Date(), updated_at: new Date() },
    { name: 'Inferno', created_at: new Date(), updated_at: new Date() },
    { name: 'O Símbolo Perdido', created_at: new Date(), updated_at: new Date() },
    { name: 'Anjos e Demônios', created_at: new Date(), updated_at: new Date() },
  ]),

  down: async (queryInterface) => queryInterface.bulkDelete('book', null, {}),
};
