import React from 'react'
import {
	FormLoginContainer,
	LinkForgotPass,
	LoginButtom,
	LoginEmailInput,
	LoginFormSubtitle,
	LoginFormTitle,
	LoginPassInput
} from '../../styles/loginStyles'
import ButtomAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import InputAtom from '../atoms/InputAtom'
import LinkAtom from '../atoms/LinkAtom'
import TitleAtom from '../atoms/TitleAtom'
import forgotIcon from '../../assets/forgotPassIcon.svg'
import ButtonImage from '../atoms/ButtonImage'
import emailIcon from '../../assets/emailIcon.svg'
import secretIcon from '../../assets/passSecrete.svg'
import loginIcon from '../../assets/login.svg'

const FormLoginMolecule: React.FC = () => {
	return (
		<FormLoginContainer>
			<LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Bem-Vindo'></TitleAtom>
				<TitleAtom color={'#F43724'} text='.'></TitleAtom>
			</LoginFormTitle>

			<LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Informe as suas credenciais de acesso ao portal'
				></TitleAtom>
			</LoginFormSubtitle>

			<LoginEmailInput>
				<InputAtom placeholder={'Informe seu email'} type={'email'} />
				<ButtonImage type={'email'} icon={emailIcon} />
			</LoginEmailInput>

			<LoginPassInput>
				<InputAtom placeholder={'Informe sua senha'} type={'password'} />
				<ButtonImage type={'password'} icon={secretIcon} />
			</LoginPassInput>
			<LoginButtom>
				<ButtomAtom text='Entrar'></ButtomAtom>
				<ButtonImage type={'email'} icon={loginIcon} />
			</LoginButtom>

			<LinkForgotPass>
				<ImageAtom alt='icone' src={forgotIcon} />
				<LinkAtom text='Esqueceu a senha?' url='' />
			</LinkForgotPass>
		</FormLoginContainer>
	)
}

export default FormLoginMolecule
