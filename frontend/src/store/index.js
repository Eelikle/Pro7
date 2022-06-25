import { createStore } from 'vuex'
// TODO use this if you want to interact with backend from the store
// import axios from 'axios';

export default createStore({
  state: {
    userId: null
  },
  getters: {
    //TODO name the getter the same as what you are getting (i.e. 'userId' instead of 'user')
    user(state) {
      return state.userId
    },
  },
  mutations: {
    // DELETE_USER(state, userId) {
    //   let users = state.users.filter(u => u.id != userId)
    //   state.users = users;
    //   state.message = 'Account successfully deleted!!'
    // },
    // TODO here is a mutation that can be used to modify the state
    // SET_USER_ID(state, userId) {
    //   state.userId = userId;
    // },
    // TODO here is a mutation that clears the userId value in the store state
    // DELETE_USER_ID(state) {
    //   state.userId = null;
    // },
  },
  actions: {
    login({ state: state }, userId) {
      state.userId = userId
    }
    // TODO here is another way to do this where the action calls a mutation
    // login({ commit }, userId) {
    //   commit('SET_USER_ID', userId);
    // },
    // TODO add 'deleteUser' action, for example
    // deleteUser({ commit }, { userId, token, notifySuccess }) {
    //   const config = { headers: { token } };
    //
    //   axios.delete('http://localhost:3000/api/user/' + userId, config).then(() => {
    //     commit('DELETE_USER_ID');
    //     notifySuccess();
    //   });
    // },
  },
  modules: {
  }
})
