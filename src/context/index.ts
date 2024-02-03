import { createContext } from 'react'
import { IAgent } from '../interfaces/interfaces'

const agent: IAgent = {
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
	agents: [agent],
	selectedAgent: agent
}

export const AppContext = createContext({ state: INITIAL_STATE })
