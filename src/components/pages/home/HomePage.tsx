import React, { useCallback, useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axios'
import { hashGenerator } from '../../../utils/md5Hash'
import HomePageOrganism from '../../organisms/HomePageOrganism'

const Home: React.FC = () => {
	const [agents, setAgents] = useState([])

	const getData = useCallback(async () => {
		try {
			const ts = new Date().getTime().toString()
			const publicKey = import.meta.env.VITE_PUBLIC_KEY
			const privateKey = import.meta.env.VITE_PRIVATE_KEY

			const hash = hashGenerator(ts, privateKey, publicKey)
			const response = await axiosInstance.get('', {
				params: { ts: ts, apikey: publicKey, hash: hash }
			})
			setAgents(response.data.data.results)
		} catch (e) {
			console.log(e)
		}
	}, [])

	useEffect(() => {
		getData()
	}, [getData])
	console.log(agents)

	return <HomePageOrganism />
}

export default Home
