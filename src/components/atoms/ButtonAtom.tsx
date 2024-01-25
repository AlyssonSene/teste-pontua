import React from 'react'
import { IButtomAtom } from '../../interfaces/interfaces'
import TitleAtom from './TitleAtom'

const ButtomAtom: React.FC<IButtomAtom> = ({ text }) => {
	return (
		<button>
			<TitleAtom color={'white'} text={text} />
		</button>
	)
}

export default ButtomAtom
