import { createContext } from 'react'
import { IAgents } from '../interfaces/interfaces'

const agents: IAgents = {
	id: 0,
	name: '',
	description: '',
	modified: '',
	thumbnail: {
		path: '',
		extension: ''
	}
}

export const INITIAL_STATE = {
	agents: [agents]
}

export const AppContext = createContext({ state: INITIAL_STATE })
