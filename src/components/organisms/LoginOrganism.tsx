import React, { useCallback, useEffect } from 'react'
import FormLoginMolecule from '../molecules/FormLoginMolecule'
import { useAppContext } from '../../context/hook'
import axiosInstance from '../../utils/axios'
import { hashGenerator } from '../../utils/md5Hash'

const LoginOrganism: React.FC = () => {
	const { state } = useAppContext()

	const getData = useCallback(async () => {
		try {
			const ts = new Date().getTime().toString()
			const publicKey = import.meta.env.VITE_PUBLIC_KEY
			const privateKey = import.meta.env.VITE_PRIVATE_KEY

			const hash = hashGenerator(ts, privateKey, publicKey)
			const response = await axiosInstance.get('', {
				params: { ts: ts, apikey: publicKey, hash: hash, limit: 10, offset: 50 }
			})

			state.setAgents(response.data.data.results)
			state.setSuccessRecovery(false)
		} catch (e) {
			console.log(e)
		}
	}, [state])

	useEffect(() => {
		getData()
	}, [getData])
	return <FormLoginMolecule />
}

export default LoginOrganism
