export default {
     state: {
          n: 0
     },
     //增删改查
     mutations: {
          handleMutationsadd(state, params) {
              state.state
          },
     },
  //处理异步
     actions: {
          handleHomeadd({ commit }, params) {
            commit("handleMutationsadd")
          }
     },
     namespaced: true
}