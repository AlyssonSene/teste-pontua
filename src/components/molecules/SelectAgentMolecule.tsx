import React from 'react'
import * as Styled from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import Dropdown from './DropdownMolecule'
import { EnterButton } from '../../styles/dropdownStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/hook'

const SelectAgentMolecule: React.FC = () => {
	const { state } = useAppContext()
	return (
		<Styled.FormLoginContainer>
			<Styled.LoginFormTitle>
				<TitleAtom
					color={'#081B4E'}
					text='Selecione o seu agente mais legal'
				></TitleAtom>
				<TitleAtom color={'#F43724'} text='.'></TitleAtom>
			</Styled.LoginFormTitle>
			<Styled.LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Tenha a visão completa do seu agente.'
				></TitleAtom>
			</Styled.LoginFormSubtitle>
			<Dropdown agents={state.agents} />
			<EnterButton>
				<Link to={`/home/user-profile/${state.selectedAgent?.id}`}>
					<ButtonAtom text='Entrar' />
				</Link>
			</EnterButton>
		</Styled.FormLoginContainer>
	)
}

export default SelectAgentMolecule
