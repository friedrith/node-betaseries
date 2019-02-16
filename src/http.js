import axios from 'axios' // https://github.com/axios/axios

const baseURL = 'http://api.betaseries.com'

// https://www.betaseries.com/api/requetes
export const getInstance = ({
  apiKey = '',
  // secretKey = '',
  userAgent = 'node-betaseries'
} = {}) =>
  axios.create({
    baseURL,
    timeout: 1000,
    headers: {
      'X-BetaSeries-Version': 3.0,
      'X-BetaSeries-Key': apiKey
      // 'User-Agent': userAgent
    }
  })
