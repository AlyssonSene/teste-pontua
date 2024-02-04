import React from 'react'
import * as Styled from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import ButtomAtom from '../atoms/ButtonAtom'
import { Link } from 'react-router-dom'

const SuccessRecovery: React.FC = () => {
	return (
		<Styled.FormLoginContainer>
			<Styled.LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Tudo certo' />
				<TitleAtom color={'#F43724'} text=' ;)' />
			</Styled.LoginFormTitle>
			<Styled.LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Foi enviado um e-mail para você com instruções de como redefinir a sua senha.'
				></TitleAtom>
			</Styled.LoginFormSubtitle>
			<Link to={'/'}>
				<Styled.LoginButtom>
					<ButtomAtom text='Voltar para o login'></ButtomAtom>
				</Styled.LoginButtom>
			</Link>
		</Styled.FormLoginContainer>
	)
}

export default SuccessRecovery
