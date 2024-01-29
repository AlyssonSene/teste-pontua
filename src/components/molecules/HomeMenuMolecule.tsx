import React from 'react'
import * as Styled from '../../styles/homePageStyles'
import ImageAtom from '../atoms/ImageAtom'
import LogoPontua from '../../assets/logo_pontua.svg'
import HomeIcon from '../../assets/homeIcon.svg'
import profileIcon from '../../assets/profileIcon.svg'
import LogoutIcon from '../../assets/logoutIcon.svg'
import SpanAtom from '../atoms/SpanAtom'

const HomeMenuMolecule: React.FC = () => {
	return (
		<Styled.HomeMenuContainer>
			<Styled.LogoContainer>
				<ImageAtom src={LogoPontua} alt='company icon' />
			</Styled.LogoContainer>
			<Styled.HomeButtonContainer>
				<ImageAtom src={HomeIcon} alt='home icon' />
				<SpanAtom text='Home' />
			</Styled.HomeButtonContainer>
			<Styled.HomeButtonContainer>
				<ImageAtom src={profileIcon} alt='profile icon' />
				<SpanAtom text='Perfil' />
			</Styled.HomeButtonContainer>
			<Styled.LogoutButtonContainer>
				<ImageAtom src={LogoutIcon} alt='Logout icon' />
				<SpanAtom text='Sair' />
			</Styled.LogoutButtonContainer>
		</Styled.HomeMenuContainer>
	)
}

export default HomeMenuMolecule
