import axios from 'axios'

const request = axios.create({
  baseURL: '/',
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response)
})

export default request
