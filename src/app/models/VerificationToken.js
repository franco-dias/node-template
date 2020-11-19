import Sequelize, { Model } from 'sequelize';

class VerificationToken extends Model {
  static init(sequelize) {
    super.init({
      token: Sequelize.STRING,
      expirationDate: Sequelize.DATE,
    }, {
      sequelize,
      tableName: 'verification_token',
      underscored: true,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  }
}

export default VerificationToken;
