import React from 'react'
import { ITitleAtom } from '../../interfaces/interfaces'
import * as Styled from '../../styles/loginStyles'

const TitleAtom: React.FC<ITitleAtom> = ({ text, color }) => {
	return <Styled.StyledSpan color={color}>{text}</Styled.StyledSpan>
}

export default TitleAtom
