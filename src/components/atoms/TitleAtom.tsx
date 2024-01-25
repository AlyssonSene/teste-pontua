import React from 'react'
import { ITitleAtom } from '../../interfaces/interfaces'
import { StyledSpan } from '../../styles/loginStyles'

const TitleAtom: React.FC<ITitleAtom> = ({ text, color }) => {
	return <StyledSpan color={color}>{text}</StyledSpan>
}

export default TitleAtom
