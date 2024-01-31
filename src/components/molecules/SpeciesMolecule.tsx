import React from 'react'
import ListAtom from '../atoms/ListAtom'
import { InfosContainer } from '../../styles/agentProfileStyles'

const SpeciesMolecule: React.FC = () => {
	const species = ['Mutate']
	return (
		<InfosContainer>
			<ListAtom list={species} />
		</InfosContainer>
	)
}

export default SpeciesMolecule
