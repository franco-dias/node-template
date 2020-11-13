import User from '../app/models/User';
import Book from '../app/models/Book';

class UserBookController {
  async store(req, res) {
    const { userId, books } = req.body;
    const bookList = await Book.findAll({
      where: {
        id: books,
      },
    });
    const user = await User.findByPk(userId);
    await user.setBooks(bookList);
    return res.status(200).json({ response: 'Books added to user.' });
  }
}

export default new UserBookController();
