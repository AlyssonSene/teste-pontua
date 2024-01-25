import React from 'react'
import { ILinkAtom } from '../../interfaces/interfaces'

const LinkAtom: React.FC<ILinkAtom> = ({ url, text }) => {
	return <a href={url}>{text}</a>
}

export default LinkAtom
