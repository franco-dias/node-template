import Book from '../app/models/Book';
import User from '../app/models/User';

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
    const { name, age } = req.body;
    const user = await User.create({
      name,
      age,
    });

    return res.status(200).json(user);
  }

  // PUT/PATCH request to update data
  async update(req, res) {}

  // DELETE request to delete data
  async delete(req, res) {}
}

export default new UserController();
