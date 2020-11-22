import path from 'path';
import User from '../app/models/User';

import VerificationToken from '../app/models/VerificationToken';

class VerificationTokenController {
  async update(req, res) {
    const { t } = req.query;
    const token = await VerificationToken.findOne({
      where: { token: t },
    });

    if (!token || new Date() > token.expirationDate) {
      return res.sendFile(path.join(__dirname, '..', 'views', 'token', 'error.html'));
    }

    const user = await User.findByPk(token.userId);
    user.verified = true;
    await user.save();
    await token.destroy();

    return res.sendFile(path.join(__dirname, '..', 'views', 'token', 'verified.html'));
  }

  async delete(req, res) {
    const { t } = req.query;
    const token = await VerificationToken.findOne({
      where: { token: t },
    });

    if (!token) {
      return res.sendFile(path.join(__dirname, '..', 'views', 'token', 'error.html'));
    }

    const user = await User.findByPk(token.userId);
    await token.destroy();
    await user.destroy();

    return res.sendFile(path.join(__dirname, '..', 'views', 'token', 'deleted.html'));
  }
}

export default new VerificationTokenController();
