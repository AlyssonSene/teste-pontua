import React from 'react'
import * as Styled from '../../styles/homePageStyles'
import HomeMenuMolecule from '../molecules/HomeMenuMolecule'
import SearchBar from '../molecules/SearchbarMolecule'
import ImageAtom from '../atoms/ImageAtom'
import ImageTeste from '../../assets/imageAgentTeste.svg'
import SpanAtom from '../atoms/SpanAtom'

const HomePageOrganism: React.FC = () => {
	const textDescription =
		'Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable ...'
	return (
		<Styled.HomePageContainer>
			<HomeMenuMolecule />
			<Styled.DashboardContainer>
				<SearchBar />
				<Styled.CardsContainer>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
					<Styled.Card>
						<Styled.CardImage>
							<ImageAtom src={ImageTeste} alt='agent image' />
						</Styled.CardImage>
						<Styled.CardDescription>
							<Styled.AgentName>
								<SpanAtom text='Wolverine' />
							</Styled.AgentName>
							<Styled.AgentDescription>
								<SpanAtom text={textDescription} />
							</Styled.AgentDescription>
						</Styled.CardDescription>
					</Styled.Card>
				</Styled.CardsContainer>
			</Styled.DashboardContainer>
		</Styled.HomePageContainer>
	)
}

export default HomePageOrganism
