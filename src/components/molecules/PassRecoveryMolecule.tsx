import React from 'react'
import * as Styled from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import ButtonImage from '../atoms/ButtonImage'
import InputAtom from '../atoms/InputAtom'
import ButtomAtom from '../atoms/ButtonAtom'
import emailIcon from '../../assets/emailIcon.svg'
import { Link } from 'react-router-dom'

const PassRecoveryMolecule: React.FC = () => {
	return (
		<Styled.FormLoginContainer>
			<Styled.LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Recuperar senha'></TitleAtom>
				<TitleAtom color={'#F43724'} text='.'></TitleAtom>
			</Styled.LoginFormTitle>
			<Styled.LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.'
				></TitleAtom>
			</Styled.LoginFormSubtitle>
			<Styled.LoginEmailInput>
				<InputAtom placeholder={'Informe seu email'} type={'email'} />
				<ButtonImage type={'email'} icon={emailIcon} />
			</Styled.LoginEmailInput>
			<Link to={'/success-recovery'}>
				<Styled.LoginButtom>
					<ButtomAtom text='Enviar link'></ButtomAtom>
				</Styled.LoginButtom>
			</Link>
		</Styled.FormLoginContainer>
	)
}

export default PassRecoveryMolecule
