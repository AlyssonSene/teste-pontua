import React from 'react'
import * as Styled from '../../styles/homePageStyles'
import ImageAtom from '../atoms/ImageAtom'
import LogoPontua from '../../assets/logo_pontua.svg'
import HomeIcon from '../../assets/homeIcon.svg'
import profileIcon from '../../assets/profileIcon.svg'
import LogoutIcon from '../../assets/logoutIcon.svg'
import TitleAtom from '../atoms/TitleAtom'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/hook'

const HomeMenuMolecule: React.FC = () => {
	const { state } = useAppContext()
	return (
		<Styled.HomeMenuContainer>
			<Styled.LogoContainer>
				<ImageAtom src={LogoPontua} alt='company icon' />
			</Styled.LogoContainer>
			<Styled.HomeButtonContainer>
				<ImageAtom src={HomeIcon} alt='home icon' />
				<Link to='/home' onClick={() => console.log(state)}>
					<TitleAtom text='Home' color='#F21A05' />
				</Link>
			</Styled.HomeButtonContainer>
			<Styled.HomeButtonContainer>
				<ImageAtom src={profileIcon} alt='profile icon' />
				<Link to={`/home/user-profile/${state.selectedAgent.id}`}>
					<TitleAtom text='Perfil' />
				</Link>
			</Styled.HomeButtonContainer>
			<Styled.LogoutButtonContainer>
				<ImageAtom src={LogoutIcon} alt='Logout icon' />
				<Link to={'/'}>
					<TitleAtom text='Sair' />
				</Link>
			</Styled.LogoutButtonContainer>
		</Styled.HomeMenuContainer>
	)
}

export default HomeMenuMolecule
