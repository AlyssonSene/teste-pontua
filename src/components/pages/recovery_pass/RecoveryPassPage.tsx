import React from 'react'
import {
	MainLoginPage,
	LogoContainer,
	Container,
	BuildingContainer
} from '../../../styles/loginStyles'
import ImageAtom from '../../atoms/ImageAtom'
import PassRecoveryMolecule from '../../molecules/PassRecoveryMolecule'
import logoPontua from '../../../assets/logo_pontua_white.svg'
import buildingImage from '../../../assets/building.svg'

const RecoveryPassPage: React.FC = () => {
	return (
		<MainLoginPage>
			<LogoContainer>
				<ImageAtom src={logoPontua} alt='logo da empresa' />
			</LogoContainer>
			<Container>
				<BuildingContainer>
					<ImageAtom src={buildingImage} alt='building' />
				</BuildingContainer>
				<PassRecoveryMolecule />
			</Container>
		</MainLoginPage>
	)
}

export default RecoveryPassPage
