import React from 'react'
import { IButtonImage } from '../../interfaces/interfaces'
import * as Styled from '../../styles/loginStyles'

const ButtonImage: React.FC<IButtonImage> = ({ icon, type }) => {
	return type === 'email' ? (
		<img src={icon} alt='' />
	) : (
		<Styled.InputIcon>
			<button>
				<img src={icon} alt='' />
			</button>
		</Styled.InputIcon>
	)
}

export default ButtonImage
