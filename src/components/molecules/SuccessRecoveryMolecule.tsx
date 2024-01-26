import React from 'react'
import * as Styled from '../../styles/loginStyles'
import TitleAtom from '../atoms/TitleAtom'
import ButtomAtom from '../atoms/ButtonAtom'

const SuccessRecovery: React.FC = () => {
	return (
		<Styled.FormLoginContainer>
			<Styled.LoginFormTitle>
				<TitleAtom color={'#081B4E'} text='Tudo certo'></TitleAtom>
				<TitleAtom color={'#F43724'} text=' ;)'></TitleAtom>
			</Styled.LoginFormTitle>
			<Styled.LoginFormSubtitle>
				<TitleAtom
					color={'#777'}
					text='Foi enviado um e-mail para você com instruções de como redefinir a sua senha.'
				></TitleAtom>
			</Styled.LoginFormSubtitle>
			<Styled.LoginButtom>
				<ButtomAtom text='Voltar para o login'></ButtomAtom>
			</Styled.LoginButtom>
		</Styled.FormLoginContainer>
	)
}

export default SuccessRecovery
