import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    }, {
      sequelize,
      tableName: 'book',
      underscored: true,
    });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'user_book',
      as: 'users',
    });
  }
}

export default Book;
