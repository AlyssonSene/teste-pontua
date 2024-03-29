import React from 'react'
import * as Styled from '../../../styles/loginStyles'
import ImageAtom from '../../atoms/ImageAtom'
import buildingImage from '../../../assets/building.svg'
import LogoPontua from '../../../assets/logo_pontua_white.svg'
import { Outlet } from 'react-router-dom'

const LoginPage: React.FC = () => {
	return (
		<Styled.MainLoginPage>
			<Styled.LogoContainer>
				<ImageAtom src={LogoPontua} alt='company logo' />
			</Styled.LogoContainer>
			<Styled.Container>
				<Styled.BuildingContainer>
					<ImageAtom src={buildingImage} alt='building' />
				</Styled.BuildingContainer>
				<Outlet />
			</Styled.Container>
		</Styled.MainLoginPage>
	)
}

export default LoginPage
