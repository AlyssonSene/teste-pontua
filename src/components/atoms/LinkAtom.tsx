import React from 'react'
import { ILinkAtom } from '../../interfaces/interfaces'

const LinkAtom: React.FC<ILinkAtom> = ({ text }) => {
	return <span>{text}</span>
}

export default LinkAtom
