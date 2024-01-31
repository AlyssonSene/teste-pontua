import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://gateway.marvel.com/v1/public/characters?',
	headers: {
		'Content-Type': 'application/json'
	},
})

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.error('Erro ao realizar a requisição:', error)
		return Promise.reject(error)
	}
)

export default axiosInstance
