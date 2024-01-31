import React from 'react'
import { IListOptions } from '../../interfaces/interfaces'

const ListAtom: React.FC<IListOptions> = ({ list }) => {
	return (
		<ul>
			{list.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	)
}

export default ListAtom
