import React from 'react'
import * as Styled from '../../styles/homePageStyles'
import SearchBar from './SearchbarMolecule'
import { Link } from 'react-router-dom'
import ImageAtom from '../atoms/ImageAtom'
import SpanAtom from '../atoms/SpanAtom'
import ArrowLeft from '../../assets/arrowLeftIcon.svg'
import ArrowRight from '../../assets/arrowRightIcon.svg'
import { useAppContext } from '../../context/hook'

const DashboardMolecule: React.FC = () => {
	const { state } = useAppContext()

	return (
		<Styled.DashboardContainer>
			<SearchBar />
			<Styled.Dashoboard>
				<Styled.CardsContainer>
					{state.agents.map((agent, index) => {
						return (
							<Link to={`/user-profile/${agent.id}`} key={index}>
								<Styled.Card className='teste'>
									<Styled.CardImage>
										<ImageAtom
											src={`${agent.thumbnail.path}.${agent.thumbnail.extension}`}
											alt='Imagem do agente'
										/>
									</Styled.CardImage>
									<Styled.CardDescription>
										<Styled.AgentName>
											<SpanAtom text={agent.name} />
										</Styled.AgentName>
										<Styled.AgentDescription>
											<SpanAtom text={agent.description} />
										</Styled.AgentDescription>
									</Styled.CardDescription>
								</Styled.Card>
							</Link>
						)
					})}
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
