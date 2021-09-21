import 'es6-promise/auto'
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const dataStore = {
  state: {
    data: []
  }
}

const dataState = createPersistedState({
  paths: [ 'data' ]
})

const store = createStore({
  modules: {
    dataStore
  },
  plugins: [ dataState ],
});

export default { store }