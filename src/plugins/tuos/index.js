import Tuos from './core/Tuos'

export default {
  install: (app, opts) => {
    app.config.globalProperties.$tuos = new Tuos(opts);
  }
}