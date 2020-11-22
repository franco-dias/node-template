import path, { resolve } from 'path';
import nodemailer from 'nodemailer';
import handlebars from 'express-handlebars';
import hbs from 'nodemailer-express-handlebars';

import config from '../config/mail';

class Mail {
  constructor() {
    const {
      host, port, auth, secure,
    } = config;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      auth,
      secure,
    });
    this.setTemplates();
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...config.default,
      ...message,
    });
  }

  setTemplates() {
    const viewPath = path.resolve(__dirname, '..', 'views', 'emails');
    this.transporter.use('compile', hbs({
      viewEngine: handlebars.create({
        layoutsDir: resolve(viewPath, 'layouts'),
        partialsDir: resolve(viewPath, 'partials'),
        defaultLayout: 'default',
        extname: '.hbs',
      }),
      viewPath,
      extName: '.hbs',
    }));
  }
}

export default new Mail();
