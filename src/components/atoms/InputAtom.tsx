import React, { ChangeEvent, useState } from 'react'
import { IInputAtom } from '../../interfaces/interfaces'

const InputAtom: React.FC<IInputAtom> = ({ type, placeholder, onChange }) => {
	const [, setUsername] = useState('')
	const [, setPassword] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		onChange?.(value)
		setUsername(value)
		if (type === 'email') {
			setUsername(value)
		} else if (type === 'password') {
			setPassword(value)
		}
	}

	return type === 'email' ? (
		<input
			placeholder={placeholder}
			required
			type={type}
			onChange={handleChange}
		/>
	) : (
		<input
			placeholder={placeholder}
			required
			type={type}
			onChange={handleChange}
		/>
	)
}

export default InputAtom
