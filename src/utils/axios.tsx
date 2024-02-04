import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://gateway.marvel.com/v1/public/characters?',
	headers: {
		'Content-Type': 'application/json'
	}
})

export default axiosInstance

/**
 import axios, { AxiosInstance } from 'axios'

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default createAxiosInstance
 */
