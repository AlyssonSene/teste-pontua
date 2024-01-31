import React from 'react'
import { InfosContainer } from '../../styles/agentProfileStyles'
import ListAtom from '../atoms/ListAtom'

const PowersMolecule: React.FC = () => {
	const powers = [
		'Agility',
		'Genius',
		'Genius-level intellect',
		'Precognitive',
		'Precognitive spider-sense',
		'Speed',
		'Spider-sense',
		'Superhuman strength'
	]
	return (
		<InfosContainer>
			<ListAtom list={powers} />
		</InfosContainer>
	)
}

export default PowersMolecule
