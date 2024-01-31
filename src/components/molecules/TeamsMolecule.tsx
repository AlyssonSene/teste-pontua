import React from 'react'
import ListAtom from '../atoms/ListAtom'
import { InfosContainer } from '../../styles/agentProfileStyles'

const TeamsMolecule: React.FC = () => {
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
