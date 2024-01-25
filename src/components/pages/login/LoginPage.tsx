import React from 'react'
import {
	BuildingContainer,
	Container,
	LogoContainer,
	MainLoginPage
} from '../../../styles/loginStyles'
import ImageAtom from '../../atoms/ImageAtom'
import buildingImage from '../../../assets/building.svg'
import LogoPontua from '../../../assets/logo_pontua_white.svg'
import LoginOrganism from '../../organisms/LoginOrganism'

const LoginPage: React.FC = () => {
	return (
		<MainLoginPage>
			<LogoContainer>
				<ImageAtom src={LogoPontua} alt='logo da empresa' />
			</LogoContainer>
			<Container>
				<BuildingContainer>
					<ImageAtom src={buildingImage} alt='building' />
				</BuildingContainer>
				<LoginOrganism />
			</Container>
		</MainLoginPage>
	)
}

export default LoginPage
