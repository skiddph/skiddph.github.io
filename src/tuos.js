import axios from 'axios';
import * as _ from 'lodash';
class Auth {
  constructor(opts) {
    this.host = opts.host;
  }

  async login(form) {
    try {
      if (typeof username === 'object') {
        const formData = _.pick(form, [ 'user', 'pass', 'return_url', 'error_url' ]);
        const url = `${this.host}/auth/login`;
        const { data } = await axios.post(url, formData);
        return data
      } else if (typeof username === 'string' && typeof password === 'string') {
        const { data } = await axios.post(`${this.host}/auth/login`, {
          user: username,
          pass: password,
        });
        return data;
      } else {
        throw new Error('Username or password is incorrect');
      }
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async register(form) {
    try {
      if (typeof form === 'object') {
        const formData = _.pick(form, [ 'user', 'pass', 'return_url', 'error_url', 'name', 'email' ]);
        const url = `${this.host}/auth/register`;
        const { data } = await axios.post(url, formData);
        return data;
      } else throw new Error('Invalid registration form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }
}

class Tuos {
  constructor(opts) {
    this.host = String(opts.host || '/api/v1');
    this.auth = new Auth({
      host: this.host,
    });
  }
}

export default {
  install: (app, opts) => {
    app.config.globalProperties.$tuos = new Tuos(opts);
  }
}
