import React from 'react'
import * as Styled from '../../styles/agentProfileStyles'
import ImageAtom from '../atoms/ImageAtom'
import TitleAtom from '../atoms/TitleAtom'
import { useAppContext } from '../../context/hook'

const AboutAgentMolecule: React.FC = () => {
	const { state } = useAppContext()
	return (
		<Styled.AboutAgentContainer>
			<ImageAtom
				src={`${state.selectedAgent?.thumbnail.path}.${state.selectedAgent?.thumbnail.extension}`}
				alt='Agent profile image'
			/>
			<Styled.DescriptionContainer>
				<Styled.AgentName>
					<TitleAtom text={state.selectedAgent?.name} />
				</Styled.AgentName>
				<Styled.AgentDescription>
					<TitleAtom text={state.selectedAgent?.description} />
				</Styled.AgentDescription>
			</Styled.DescriptionContainer>
		</Styled.AboutAgentContainer>
	)
}

export default AboutAgentMolecule
