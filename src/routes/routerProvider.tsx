import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../components/pages/home/HomePage'
import LoginPage from '../components/pages/login/LoginPage'
import RecoveryPassPage from '../components/pages/recovery_pass/RecoveryPassPage'
import DashboardMolecule from '../components/molecules/DashboardMolecule'
import AgentProfileMolecule from '../components/molecules/AgentProfileMolecule'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		children: [
			{
				path: '/',
				element: <DashboardMolecule />
			},
			{
				path: 'user-profile',
				element: <AgentProfileMolecule />
			}
		]
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
