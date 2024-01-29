import React from 'react'
import { ISpan } from '../../interfaces/interfaces'

const SpanAtom: React.FC<ISpan> = ({ text }) => {
	return <span>{text}</span>
}

export default SpanAtom
