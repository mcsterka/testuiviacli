import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    employees: []
  },
  mutations: {
    SET_EMPLOYEES: (state, employees) => {
      console.log(employees);
      state.employees = employees
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
          console.log(error)
          return error
        })
    }
  },
  getters: {
    EMPLOYEES (state) {
      return state.employees
    }
  }
});
