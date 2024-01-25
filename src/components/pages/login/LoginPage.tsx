import React, { useState } from 'react'
import FormLoginMolecule from '../../molecules/FormLoginMolecule'
import {
	BuildingContainer,
	Container,
	LogoContainer,
	MainLoginPage
} from '../../../styles/loginStyles'
import ImageAtom from '../../atoms/ImageAtom'
import buildingImage from '../../../assets/building.svg'
import LogoPontua from '../../../assets/logo_pontua_white.svg'
import PassRecoveryMolecule from '../../molecules/PassRecoveryMolecule'

const LoginPage: React.FC = () => {
	const [recoveryPass] = useState(false)

	return (
		<MainLoginPage>
			<LogoContainer>
				<ImageAtom src={LogoPontua} alt='logo da empresa' />
			</LogoContainer>
			<Container>
				<BuildingContainer>
					<ImageAtom src={buildingImage} alt='building' />
				</BuildingContainer>
				{recoveryPass ? <FormLoginMolecule /> : <PassRecoveryMolecule />}
			</Container>
		</MainLoginPage>
	)
}

export default LoginPage
