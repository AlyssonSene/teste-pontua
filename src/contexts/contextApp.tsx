import { ReactNode, createContext } from 'react'

type AppContextProps = {
	children: ReactNode
}

const Agents = {
	agents: []
}

export const ContextApp = createContext(Agents)

export const AppProvider = ({ children }: AppContextProps) => {
	return (
		<ContextApp.Provider value={{ ...Agents }}>{children}</ContextApp.Provider>
	)
}
