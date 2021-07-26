import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listTask: [
      {id: 1, name: "Arrumar casa"},
      {id: 2, name: "Teste 3"},
      {id: 3, name: "Teste"},
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
