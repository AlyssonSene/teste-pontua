import React from 'react'
import * as Styled from '../../styles/loginStyles'
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
import { Link } from 'react-router-dom'

const FormLoginMolecule: React.FC = () => {
	return (
		<Styled.FormLoginContainer>
			<Styled.LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Bem-Vindo'></TitleAtom>
				<TitleAtom color={'#F43724'} text='.'></TitleAtom>
			</Styled.LoginFormTitle>

			<Styled.LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Informe as suas credenciais de acesso ao portal'
				></TitleAtom>
			</Styled.LoginFormSubtitle>

			<Styled.LoginEmailInput>
				<InputAtom placeholder={'Informe seu email'} type={'email'} />
				<ButtonImage type={'email'} icon={emailIcon} />
			</Styled.LoginEmailInput>

			<Styled.LoginPassInput>
				<InputAtom placeholder={'Informe sua senha'} type={'password'} />
				<ButtonImage type={'password'} icon={secretIcon} />
			</Styled.LoginPassInput>
			<Styled.LoginButtom>
				<ButtomAtom text='Entrar'></ButtomAtom>
				<ButtonImage type={'email'} icon={loginIcon} />
			</Styled.LoginButtom>

			<Styled.LinkForgotPass>
				<ImageAtom alt='icone' src={forgotIcon} />
				<Link to={'/recovery'}>
					<LinkAtom text='Esqueceu a senha?' />
				</Link>
			</Styled.LinkForgotPass>
		</Styled.FormLoginContainer>
	)
}

export default FormLoginMolecule
