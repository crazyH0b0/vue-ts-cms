import request from 'axios'

const service = request.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

export default service