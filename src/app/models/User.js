import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      age: Sequelize.INTEGER,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      verified: Sequelize.BOOLEAN,
    }, {
      sequelize,
      tableName: 'user',
      underscored: true,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Book, {
      through: 'user_book',
      as: 'books',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
