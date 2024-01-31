import React from 'react'
import { Outlet } from 'react-router-dom'
import * as Styled from '../../styles/homePageStyles'
import HomeMenuMolecule from '../molecules/HomeMenuMolecule'

const HomePageOrganism: React.FC = () => {
	return (
		<Styled.HomePageContainer>
			<HomeMenuMolecule />
			<Outlet />
		</Styled.HomePageContainer>
	)
}

export default HomePageOrganism
