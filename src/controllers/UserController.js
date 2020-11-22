import crypto from 'crypto';

import Mail from '../lib/Mail';
import Book from '../app/models/Book';
import User from '../app/models/User';
import VerificationToken from '../app/models/VerificationToken';

class UserController {
  // GET request to gather specific data
  async index(req, res) {}

  // GET request to list data
  async list(_, res) {
    const users = await User.findAll({
      include: [
        {
          model: Book,
          as: 'books',
          through: { attributes: [] },
        },
      ],
    });
    return res.status(200).json(users);
  }

  // POST request to store data
  async store(req, res) {
    const user = await User.create(req.body);

    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 2);

    const token = await VerificationToken.create({
      userId: user.id,
      token: crypto.randomBytes(16).toString('hex'),
      expirationDate,
    });

    await Mail.sendMail({
      from: '"Gabriel Franco" <gabrielfdg10@gmail.com>',
      to: `"${user.name}" <${user.email}>`,
      subject: 'Conta criada em BrasilCertec',
      template: 'userCreated',
      context: {
        name: user.name,
        token: token.token,
      },
    });

    return res.status(200).json({
      user,
      token,
    });
  }

  // PUT/PATCH request to update data
  async update(req, res) {}

  // DELETE request to delete data
  async delete(req, res) {}
}

export default new UserController();
