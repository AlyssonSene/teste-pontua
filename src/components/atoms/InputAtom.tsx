import React from 'react'
import { IInputAtom } from '../../interfaces/interfaces'

const InputAtom: React.FC<IInputAtom> = ({ type, placeholder }) => {
	return type === 'email' ? (
		<input placeholder={placeholder} type={type} />
	) : (
		<input placeholder={placeholder} type={type} />
	)
}

export default InputAtom
