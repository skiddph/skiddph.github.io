import axios from 'axios';
import * as _ from 'lodash';

class Auth {
  constructor(opts) {
    this.host = opts.host;
    this.url = {
      register: `${this.host}/auth/register`,
      login: `${this.host}/auth/login`,
      pass: `${this.host}/auth/password`,
      logout: `${this.host}/auth/logout`,
      logoutAll: `${this.host}/auth/logout/all`,
      logoutSession: `${this.host}/auth/logout/session/{id}`,
      mySession: `${this.host}/auth/session`,
      session: `${this.host}/auth/session/{id}`,
      sessions: `${this.host}/auth/sessions/{page}/{items}`,
      sessionsAll: `${this.host}/auth/sessions/all`,
      myUser: `${this.host}/user`,
      user: `${this.host}/user/{user}`,
      getUserCheck: `${this.host}/user/check`,
      postUserCheck: `${this.host}/user/check/{user}`,
      users: `${this.host}/users/{page}/{items}`
    }
  }

  tokenOption(token) {
    return {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  }

  async login(form) {
    try {
      const loginUrl = this.url[ 'login' ]
      if (typeof form === 'object') {
        const formData = _.pick(form, [ 'user', 'pass', 'return_url', 'error_url' ]);
        const { data } = await axios.post(loginUrl, formData)
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data
      } else {
        throw new Error('Form must be an object');
      }
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async register(form) {
    try {
      const registerUrl = this.url[ 'register' ]
      if (typeof form === 'object') {
        const formData = _.pick(form, [ 'user', 'pass', 'return_url', 'error_url', 'name', 'email' ]);
        const { data } = await axios.post(registerUrl, formData)
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid registration form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async logout(form) {
    try {
      const logoutUrl = this.url[ 'logout' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.delete(logoutUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid logout form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async logoutAll(form) {
    try {
      const logoutAllUrl = this.url[ 'logoutAll' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.delete(logoutAllUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid logout form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async logoutSession(form) {
    try {
      const logoutSessionUrl = this.url[ 'logoutSession' ]
      if (typeof form === 'object') {
        const { token, id, _id } = _.pick(form, [ 'id', '_id', 'token' ]);
        logoutSessionUrl.replace('{id}', id || _id);
        const { data } = await axios.delete(logoutSessionUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid logout form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async resetPassword(form) {
    try {
      const passUrl = this.url[ 'pass' ]
      if (typeof form === 'object') {
        const formData = _.pick(form, [ 'user', 'pass', 'return_url', 'error_url' ]);
        const { data } = await axios.post(passUrl, formData)
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid password form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async mySession(form) {
    try {
      const mySessionUrl = this.url[ 'mySession' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.get(mySessionUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid session form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async session(form) {
    try {
      const sessionUrl = this.url[ 'session' ]
      if (typeof form === 'object') {
        const { token, id, _id } = _.pick(form, [ 'id', '_id', 'token' ]);
        sessionUrl.replace('{id}', id || _id);
        const { data } = await axios.get(sessionUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid session form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async sessions(form) {
    try {
      const sessionsUrl = this.url[ 'sessions' ]
      if (typeof form === 'object') {
        const { token, page, items } = _.pick(form, [ 'token', 'page', 'items' ]);
        sessionsUrl.replace('{page}', page);
        sessionsUrl.replace('{items}', items);
        const { data } = await axios.get(sessionsUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid sessions form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async sessionsAll(form) {
    try {
      const sessionsAllUrl = this.url[ 'sessionsAll' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.get(sessionsAllUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid sessions form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async myUser(form) {
    try {
      const myUserUrl = this.url[ 'myUser' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.get(myUserUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid user form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async user(form) {
    try {
      const userUrl = this.url[ 'user' ]
      if (typeof form === 'object') {
        const { token, user } = _.pick(form, [ 'user', 'token' ]);
        userUrl.replace('{user}', user);
        const { data } = await axios.get(userUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid user form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async update(form) {
    try {
      const updateUrl = this.url[ 'myUser' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.put(updateUrl, form, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid update form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async delete(form) {
    try {
      const deleteUrl = this.url[ 'myUser' ]
      if (typeof form === 'object') {
        const { token } = _.pick(form, [ 'token' ]);
        const { data } = await axios.delete(deleteUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid delete form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async getUserCheck(form) {
    try {
      const getUserCheckUrl = this.url[ 'getUserCheck' ]
      if (typeof form === 'object') {
        const { user } = _.pick(form, [ 'user' ]);
        getUserCheckUrl.replace('{user}', user);
        const { data } = await axios.get(getUserCheckUrl)
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid getUserCheck form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async postUserCheck(form) {
    try {
      const postUserCheckUrl = this.url[ 'postUserCheck' ]
      if (typeof form === 'object') {
        const { user } = _.pick(form, [ 'user' ]);
        const { data } = await axios.post(postUserCheckUrl, { user })
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid postUserCheck form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }

  async users(form) {
    try {
      const usersUrl = this.url[ 'users' ]
      if (typeof form === 'object') {
        const { token, page, items } = _.pick(form, [ 'token', 'page', 'items' ]);
        usersUrl.replace('{page}', page);
        usersUrl.replace('{items}', items);
        const { data } = await axios.get(usersUrl, this.tokenOption(token))
          .catch(e => {
            return { type: 'error', message: e.message }
          });
        return data;
      } else throw new Error('Invalid users form')
    } catch (e) {
      return { type: 'error', message: e.message }
    }
  }
}

export default Auth;