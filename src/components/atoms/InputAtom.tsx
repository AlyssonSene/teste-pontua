import React from 'react'
import { IInputAtom } from '../../interfaces/interfaces'

const InputAtom: React.FC<IInputAtom> = ({ type }) => {
	return type === 'email' ? <input type={type} /> : <input type={type} />
}

export default InputAtom
