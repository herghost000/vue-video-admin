import {
  queryType,
  createType,
  updateType,
  destoryType
} from '@/api/video/type'

const app = {
  state: {
    type: {}
  },
  mutations: {
    SET_TYPE: (state, type) => {
      state.type = type
    }
  },
  actions: {
    QueryType: ({
      commit
    }, playload) => {
      return new Promise((resolve, reject) => {
        queryType(playload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    CreateType: ({
      commit
    }, playload) => {
      return new Promise((resolve, reject) => {
        createType(playload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateType: ({
      commit
    }, playload) => {
      return new Promise((resolve, reject) => {
        updateType(playload.id, playload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    DestoryType: ({
      commit
    }, playload) => {
      return new Promise((resolve, reject) => {
        destoryType(playload.id)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default app
