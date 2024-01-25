import React from 'react'
import {
	FormLoginContainer,
	LoginButtom,
	LoginEmailInput,
	LoginFormSubtitle,
	LoginFormTitle
} from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import ButtonImage from '../atoms/ButtonImage'
import InputAtom from '../atoms/InputAtom'
import ButtomAtom from '../atoms/ButtonAtom'
import emailIcon from '../../assets/emailIcon.svg'

const PassRecoveryMolecule: React.FC = () => {
	return (
		<FormLoginContainer>
			<LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Recuperar senha'></TitleAtom>
				<TitleAtom color={'#F43724'} text='.'></TitleAtom>
			</LoginFormTitle>
			<LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.'
				></TitleAtom>
			</LoginFormSubtitle>
			<LoginEmailInput>
				<InputAtom placeholder={'Informe seu email'} type={'email'} />
				<ButtonImage type={'email'} icon={emailIcon} />
			</LoginEmailInput>
			<LoginButtom>
				<ButtomAtom text='Enviar link'></ButtomAtom>
			</LoginButtom>
		</FormLoginContainer>
	)
}

export default PassRecoveryMolecule
