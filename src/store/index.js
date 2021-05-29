import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    employees: [],
    paramsToInsert: {}
  },
  mutations: {
    SET_EMPLOYEES: (state, employees) => {
      state.employees = employees
      state.paramsToInsert = {};
    }
  },
  actions: {
    GET_EMPLOYEES ({ commit }) {
      axios.get('http://localhost:3000/users/privet', { })
        .then(res => {
          console.log(res.data);
          commit('SET_EMPLOYEES', res.data.data)
          return res.data.data
        })
        .catch(error => {
          return alert(error);
        })
    },
    async CREATE_EMPLOYEE({ state, commit }) {
      axios.post('http://localhost:3000/users/employee', state.paramsToInsert)
      .then(res => {
        console.log(res.data);
        commit('SET_EMPLOYEES', res.data.data)
        return res.data.data
      })
      .catch(error => {
        return alert(error);
      })
  },
  },
  getters: {
    EMPLOYEES (state) {
      return state.employees
    }
  }
});
