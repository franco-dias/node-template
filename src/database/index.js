import Sequelize from 'sequelize';

import Book from '../app/models/Book';
import User from '../app/models/User';
import config from '../config/database';

const models = [
  User,
  Book,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
