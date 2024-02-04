import React from 'react'
import * as Styled from '../../styles/agentProfileStyles'
import TitleAtom from '../atoms/TitleAtom'
import SpanAtom from '../atoms/SpanAtom'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/hook'

const AgentProfileMolecule: React.FC = () => {
	const { state } = useAppContext()
	return (
		<Styled.AgentProfileContainer>
			<Styled.AgentNameContainer>
				<TitleAtom text={'Perfil'} color=' #081B4E' />
				<TitleAtom text={'/'} color=' #F43724' />
				<TitleAtom text={state.selectedAgent?.name} color=' #777' />
			</Styled.AgentNameContainer>
			<Styled.MenubarContainer>
				<Link to={`/home/user-profile/${state.selectedAgent?.id}`}>
					<Styled.MenuOptions>
						<SpanAtom text='Visão Geral' />
						<Styled.UnderLine />
					</Styled.MenuOptions>
				</Link>

				<Link to={'teams'}>
					<Styled.MenuOptions>
						<SpanAtom text='Teams' />
					</Styled.MenuOptions>
				</Link>

				<Link to={'powers'}>
					<Styled.MenuOptions>
						<SpanAtom text='Powers' />
					</Styled.MenuOptions>
				</Link>

				<Link to={'species'}>
					<Styled.MenuOptions>
						<SpanAtom text='Species' />
					</Styled.MenuOptions>
				</Link>

				<Link to={'authors'}>
					<Styled.MenuOptions>
						<SpanAtom text='Authors' />
					</Styled.MenuOptions>
				</Link>
			</Styled.MenubarContainer>
			<Outlet />
		</Styled.AgentProfileContainer>
	)
}

export default AgentProfileMolecule
