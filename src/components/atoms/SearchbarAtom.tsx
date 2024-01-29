import React from 'react'
import { IInputAtom } from '../../interfaces/interfaces'

const SearchbarInput: React.FC<IInputAtom> = ({ placeholder, type }) => {
	return <input placeholder={placeholder} type={type}></input>
}

export default SearchbarInput
