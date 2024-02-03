import React from 'react'
import * as Styled from '../../styles/agentProfileStyles'
import ImageAtom from '../atoms/ImageAtom'
import TitleAtom from '../atoms/TitleAtom'
import { useAppContext } from '../../context/hook'

const AboutAgentMolecule: React.FC = () => {
	const {
		state: { selectedAgent }
	} = useAppContext()
	return (
		<Styled.AboutAgentContainer>
			<ImageAtom
				src={`${selectedAgent.thumbnail.path}.${selectedAgent.thumbnail.extension}`}
				alt='Agent profile image'
			/>
			<Styled.DescriptionContainer>
				<Styled.AgentName>
					<TitleAtom text={selectedAgent.name} />
				</Styled.AgentName>
				<Styled.AgentDescription>
					<TitleAtom text={selectedAgent.description} />
				</Styled.AgentDescription>
			</Styled.DescriptionContainer>
		</Styled.AboutAgentContainer>
	)
}

export default AboutAgentMolecule
