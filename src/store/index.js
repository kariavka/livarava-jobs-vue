import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import axios from 'axios'
import {jsonapiModule} from 'jsonapi-vuex'
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex);

const api = axios.create({
  baseURL: 'https://www.livarava.com/api/v2/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    jv: jsonapiModule(api),
    app,
  },
  state: {},
  mutations: {},
});

Vue.use(VuexI18n.plugin, store);

export default store
