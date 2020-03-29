import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Link Table',
    about: 'franz.reitinger@htl-wels.at',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_LINK_ALL: (state) => {
      state.links = []
    }
  },
  actions: {
    REMOVE_LINK: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
    REMOVE_ALL_LINKS({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_LINK_ALL')
          resolve()
        }, 1500)
      }) // return promise
    } // END REMOVE_ALL_LINKS
  },
  modules: {
  }
})
