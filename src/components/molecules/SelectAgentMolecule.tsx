import React from 'react'
import * as Styled from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import Dropdown from './DropdownMolecule'
import avatar from '../../assets/pontua.ico'
import { EnterButton } from '../../styles/dropdownStyles'
import ButtonAtom from '../atoms/ButtonAtom'

const SelectAgentMolecule: React.FC = () => {
	const options = [
		{ id: 1, name: 'João', avatar },
		{ id: 2, name: 'Maria', avatar },
		{ id: 3, name: 'Maria', avatar },
		{ id: 4, name: 'Maria', avatar },
		{ id: 5, name: 'Maria', avatar },
		{ id: 6, name: 'Maria', avatar },
		{ id: 7, name: 'Maria', avatar },
		{ id: 8, name: 'Pedro', avatar }
	]
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
			<Dropdown options={options} />
			<EnterButton>
				<ButtonAtom text='Entrar' />
			</EnterButton>
		</Styled.FormLoginContainer>
	)
}

export default SelectAgentMolecule
