import React from 'react'
import ListAtom from '../atoms/ListAtom'
import { InfosContainer } from '../../styles/agentProfileStyles'

const AuthorsMolecule: React.FC = () => {
	const authors = ['Stan Lee', 'Steve Ditko']
	return (
		<InfosContainer>
			<ListAtom list={authors} />
		</InfosContainer>
	)
}

export default AuthorsMolecule
