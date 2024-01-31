import React from 'react'
import * as Styled from '../../styles/agentProfileStyles'
import ImageAtom from '../atoms/ImageAtom'
import TitleAtom from '../atoms/TitleAtom'
import ImageAgent from '../../assets/imageAgentTeste.svg'

const AboutAgentMolecule: React.FC = () => {
	return (
		<Styled.AboutAgentContainer>
			<ImageAtom src={ImageAgent} alt='Agent profile image' />
			<Styled.DescriptionContainer>
				<Styled.AgentName>
					<TitleAtom text={'Wolverine'} />
				</Styled.AgentName>
				<Styled.AgentDescription>
					<TitleAtom
						text={
							'Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable ...'
						}
					/>
				</Styled.AgentDescription>
			</Styled.DescriptionContainer>
		</Styled.AboutAgentContainer>
	)
}

export default AboutAgentMolecule
