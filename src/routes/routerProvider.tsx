import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../components/pages/home/HomePage'
import LoginPage from '../components/pages/login/LoginPage'
import RecoveryPassPage from '../components/pages/recovery_pass/RecoveryPassPage'
import DashboardMolecule from '../components/molecules/DashboardMolecule'
import AgentProfileMolecule from '../components/molecules/AgentProfileMolecule'
import AboutAgentMolecule from '../components/molecules/AboutAgentMolecule'
import TeamsMolecule from '../components/molecules/TeamsMolecule'
import PowersMolecule from '../components/molecules/PowersMolecule'
import SpeciesMolecule from '../components/molecules/SpeciesMolecule'
import AuthorsMolecule from '../components/molecules/AuthorsMolecle'

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
				element: <AgentProfileMolecule />,
				children: [
					{
						path: '',
						element: <AboutAgentMolecule />
					},
					{ path: 'teams', element: <TeamsMolecule /> },
					{ path: 'powers', element: <PowersMolecule /> },
					{ path: 'species', element: <SpeciesMolecule /> },
					{ path: 'authors', element: <AuthorsMolecule /> }
				]
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
