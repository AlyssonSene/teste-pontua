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
	selectedAgent: IAgent | null
	setSelectedAgent: Dispatch<SetStateAction<IAgent | null>>
	successRecovery: boolean
	setSuccessRecovery: Dispatch<SetStateAction<boolean>>
}

const INITIAL_STATE: IAppContext = {
	agents: [],
	selectedAgent: null,
	setSelectedAgent: () => {},
	successRecovery: false,
	setSuccessRecovery: () => {}
}

export const AppContext = createContext({ state: INITIAL_STATE })

type ProviderProps = {
	children?: ReactNode
}

export const AppContextProvider = ({ children }: ProviderProps) => {
	const [selectedAgent, setSelectedAgent] = useState<IAgent | null>(null)
	const [successRecovery, setSuccessRecovery] = useState<boolean>(false)
	const agents: IAgent[] = []

	const initial_state = {
		agents,
		selectedAgent,
		setSelectedAgent,
		successRecovery,
		setSuccessRecovery
	}

	return (
		<AppContext.Provider value={{ state: initial_state }}>
			{children}
		</AppContext.Provider>
	)
}
