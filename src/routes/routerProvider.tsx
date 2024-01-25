import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../components/pages/home/HomePage'
import LoginPage from '../components/pages/login/LoginPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/login',
		element: <LoginPage />
	}
])

export default router
