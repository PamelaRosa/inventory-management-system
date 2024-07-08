const Services = require('./Services');
const bcrypt = require('bcrypt');
const dataSource = require('../database/models');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async register(user) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const registeredUser = await dataSource[this.model].create({
      name,
      email,
      password: hashedPassword
    });
    return {
      id: registeredUser.id,
      name: registeredUser.name,
      email: registeredUser.email
    };
  }

  async update(user, id) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    await dataSource[this.model].update({
      name,
      email,
      password: hashedPassword
    }, {
      where: { id }
    });
    return {
      id,
      name,
      email
    };
  }

  async login(email, password) {
    const userByEmail = await this.getUserByEmail(email);
    if (userByEmail) {
      const passwordMatches = await bcrypt.compare(password, userByEmail.password);
      if (passwordMatches) {
        return {
          id: userByEmail.id,
          name: userByEmail.name,
          email: userByEmail.email
        };
      }
    }
    return null;
  }

  async getUserByEmail(email) {
    return await dataSource[this.model].findOne({ where: { email } });
  }
}

module.exports = UserServices;