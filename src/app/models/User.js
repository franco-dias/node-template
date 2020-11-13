import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'user',
        underscored: true,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Book, {
      through: 'user_book',
      as: 'books',
    });
  }
}

export default User;
