import React from 'react'
import ListAtom from '../atoms/ListAtom'
import { InfosContainer } from '../../styles/agentProfileStyles'
// import { useAppContext } from '../../context/hook'

const TeamsMolecule: React.FC = () => {
	// const {
	// 	state: { selectedAgent }
	// } = useAppContext()
	const teams = [
		'Avengers',
		'Defenders',
		'Fantastic Four',
		'Future Foundation',
		'Heroes for Hire',
		'The New Avengers',
		'X-Mansion'
	]
	return (
		<InfosContainer>
			<ListAtom list={teams} />
		</InfosContainer>
	)
}

export default TeamsMolecule
