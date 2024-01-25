import React from 'react'
import { IButtonImage } from '../../interfaces/interfaces'
import { InputIcon } from '../../styles/loginStyles'

const ButtonImage: React.FC<IButtonImage> = ({ icon, type }) => {
	return type === 'email' ? (
		<img src={icon} alt='' />
	) : (
		<InputIcon>
			<button>
				<img src={icon} alt='' />
			</button>
		</InputIcon>
	)
}

export default ButtonImage
