import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState
} from 'react'
import { IAgent, IUser } from '../interfaces/interfaces'

export interface IAppContext {
	user: IUser
	setUser: Dispatch<SetStateAction<IUser>>
	agents: IAgent[]
	setAgents: Dispatch<SetStateAction<IAgent[]>>
	selectedAgent: IAgent | null
	setSelectedAgent: Dispatch<SetStateAction<IAgent | null>>
	successRecovery: boolean
	setSuccessRecovery: Dispatch<SetStateAction<boolean>>
}

const INITIAL_STATE: IAppContext = {
	user: { name: '', password: '' },
	setUser: () => {},
	agents: [],
	setAgents: () => {},
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
	const [agents, setAgents] = useState<IAgent[]>([])
	const [user, setUser] = useState<IUser>({ name: '', password: '' })

	const initial_state = {
		agents,
		setAgents,
		selectedAgent,
		setSelectedAgent,
		successRecovery,
		setSuccessRecovery,
		user,
		setUser
	}

	return (
		<AppContext.Provider value={{ state: initial_state }}>
			{children}
		</AppContext.Provider>
	)
}
