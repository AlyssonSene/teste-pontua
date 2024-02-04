import React from 'react'
import * as Styled from '../../../styles/loginStyles'
import ImageAtom from '../../atoms/ImageAtom'
import PassRecoveryMolecule from '../../molecules/PassRecoveryMolecule'
import logoPontua from '../../../assets/logo_pontua_white.svg'
import buildingImage from '../../../assets/building.svg'
import SuccessRecovery from '../../molecules/SuccessRecoveryMolecule'
import { useAppContext } from '../../../context/hook'

const RecoveryPassPage: React.FC = () => {
	const { state } = useAppContext()
	return (
		<Styled.MainLoginPage>
			<Styled.LogoContainer>
				<ImageAtom src={logoPontua} alt='company logo' />
			</Styled.LogoContainer>
			<Styled.Container>
				<Styled.BuildingContainer>
					<ImageAtom src={buildingImage} alt='building' />
				</Styled.BuildingContainer>
				{state.successRecovery ? <SuccessRecovery /> : <PassRecoveryMolecule />}
			</Styled.Container>
		</Styled.MainLoginPage>
	)
}

export default RecoveryPassPage
