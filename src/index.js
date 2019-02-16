import { getInstance } from './http'

let instance = null
const instanceNullError = 'Initialization not done. Please call init first'

const buildResult = method => (options, callback) => {
  if (instance) {
    if (callback && typeof callback === 'function') {
      method(options, callback)
    } else {
      return new Promise((resolve, reject) => {
        method(options, (err, response) => {
          if (err) {
            reject(err)
          } else {
            resolve(response)
          }
        })
      })
    }
  } else {
    if (callback && typeof callback === 'function') {
      callback(instanceNullError)
    }
    return new Promise((resolve, reject) => {
      reject(instanceNullError)
    })
  }
}

export const init = opts => {
  instance = getInstance(opts)
}

export const searchAll = buildResult(({ query = '', limit = 5 }, callback) => {
  instance
    .get('/search/all', {
      query,
      limit
    })
    .then(response => {
      callback(null, response)
    })
    .catch(error => {
      callback(error)
    })
})

export const searchAll = buildResult(({ query = '', limit = 5 }, callback) => {
  instance
    .get('/search/all', {
      query,
      limit
    })
    .then(response => {
      callback(null, response)
    })
    .catch(error => {
      callback(error)
    })
})
