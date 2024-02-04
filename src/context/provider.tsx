import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState
} from 'react'
import { IAgent } from '../interfaces/interfaces'

export interface IAppContext {
	agents: IAgent[]
	selectedAgent: IAgent
	setSelectedAgent: Dispatch<SetStateAction<IAgent>>
}

const INITIAL_STATE = {
	agents: [],
	selectedAgent: {
		id: 0,
		name: '',
		description: '',
		modified: '',
		thumbnail: { path: '', extension: '' }
	},
	setSelectedAgent: () => {}
} as IAppContext

export const AppContext = createContext({ state: INITIAL_STATE })

type ProviderProps = {
	children?: ReactNode
}

export const AppContextProvider = ({ children }: ProviderProps) => {
	const [selectedAgent, setSelectedAgent] = useState<IAgent>({
		id: 0,
		description: '',
		name: '',
		modified: '',
		thumbnail: { path: '', extension: '' }
	})
	const agents: IAgent[] = []

	const initial_state = { agents, selectedAgent, setSelectedAgent }

	return (
		<AppContext.Provider value={{ state: initial_state }}>
			{children}
		</AppContext.Provider>
	)
}
