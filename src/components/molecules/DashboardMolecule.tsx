import React from 'react'
import * as Styled from '../../styles/homePageStyles'
import SearchBar from './SearchbarMolecule'
import { useNavigate } from 'react-router-dom'
import ImageAtom from '../atoms/ImageAtom'
import ImageTeste from '../../assets/imageAgentTeste.svg'
import SpanAtom from '../atoms/SpanAtom'
import ArrowLeft from '../../assets/arrowLeftIcon.svg'
import ArrowRight from '../../assets/arrowRightIcon.svg'

const DashboardMolecule: React.FC = () => {
	const textDescription =
		'Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable ...'

	const history = useNavigate()

	const navigateToProfile = () => {
		history(`/user-profile/`)
	}
	return (
		<Styled.DashboardContainer>
			<SearchBar />
			<Styled.Dashoboard>
				<Styled.CardsContainer>
					<Styled.Card onClick={navigateToProfile}>
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
				<Styled.PagesContainer>
					<div>
						<ImageAtom src={ArrowLeft} alt='arrow left icon' />
					</div>
					<Styled.PagesNumber>
						<SpanAtom text='1' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='2' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='3' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='...' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='8' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='9' />
					</Styled.PagesNumber>
					<Styled.PagesNumber>
						<SpanAtom text='10' />
					</Styled.PagesNumber>
					<div>
						<ImageAtom src={ArrowRight} alt='arrow right icon' />
					</div>
				</Styled.PagesContainer>
			</Styled.Dashoboard>
		</Styled.DashboardContainer>
	)
}

export default DashboardMolecule