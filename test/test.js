import dotenv from 'dotenv' // https://github.com/motdotla/dotenv#readme

import { init, searchAll } from 'node-betaseries' // using babel alias

dotenv.config()

init({
  apiKey: process.env.API_KEY
})

searchAll({ query: 'Pacific Rim' }).then(data => {
  console.log('data', data)
})
