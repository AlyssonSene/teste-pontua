import React from 'react'
import { SearchBarContainer } from '../../styles/homePageStyles'
import SearchbarInput from '../atoms/SearchbarAtom'
import ImageAtom from '../atoms/ImageAtom'
import SearchIcon from '../../assets/searchIcon.svg'

const SearchBar: React.FC = () => {
	return (
		<SearchBarContainer>
			<ImageAtom src={SearchIcon} alt='Search icon' />
			<SearchbarInput placeholder='Busque um agente' type='text' />
		</SearchBarContainer>
	)
}

export default SearchBar
