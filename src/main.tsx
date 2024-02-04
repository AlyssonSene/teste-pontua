import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routerProvider'
import { AppContextProvider } from './context/provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AppContextProvider>
		<RouterProvider router={router} />
	</AppContextProvider>
)
