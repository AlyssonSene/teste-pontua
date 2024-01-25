import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../components/pages/home/HomePage'
import LoginPage from '../components/pages/login/LoginPage'
import RecoveryPassPage from '../components/pages/recovery_pass/RecoveryPassPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/login',
		element: <LoginPage />
	},

	{
		path: '/recovery',
		element: <RecoveryPassPage />
	}
])

export default router
