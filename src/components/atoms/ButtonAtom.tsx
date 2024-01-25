import React from 'react'
import { IButtomAtom } from '../../interfaces/interfaces'
import { LoginButtom } from '../../styles/loginStyles'

const ButtomAtom: React.FC<IButtomAtom> = ({ text }) => {
	return <LoginButtom>{text}</LoginButtom>
}

export default ButtomAtom
