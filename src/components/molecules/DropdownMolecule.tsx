import React, { useState } from 'react'
import * as Styled from '../../styles/dropdownStyles'
import { IAgent, IOptionsSelect } from '../../interfaces/interfaces'
import { useAppContext } from '../../context/hook'

const DropdownAtom: React.FC<IOptionsSelect> = ({ agents }) => {
	const { state } = useAppContext()
	const [isOpen, setIsOpen] = useState(false)
	const [rotated, setRotated] = useState(false)
	const [selectedAgent, setSeletedAgent] = useState(agents[0])

	const handleOptionClick = (agent: IAgent) => {
		state.setSelectedAgent(agent)
		setSeletedAgent(agent)
		setIsOpen(!isOpen)
		setRotated(!rotated)
	}

	const handleClick = (value: boolean) => {
		setRotated(!value)
	}

	return (
		<Styled.DropdownContainer>
			<Styled.DropdownButton
				onClick={() => {
					setIsOpen(!isOpen)
					handleClick(rotated)
				}}
			>
				<Styled.SelectedOption>
					<Styled.Avatar
						src={`${selectedAgent?.thumbnail.path}.${selectedAgent?.thumbnail.extension}`}
						alt={`${selectedAgent?.name} avatar`}
					/>
					<Styled.Name>{selectedAgent?.name}</Styled.Name>
				</Styled.SelectedOption>
				<Styled.CaretIcon rotate={rotated.toString()} />
			</Styled.DropdownButton>
			<Styled.OptionsContainer style={{ display: isOpen ? 'block' : 'none' }}>
				<Styled.OptionsList>
					{agents.map(agent => (
						<Styled.Option
							key={agent.id}
							onClick={() => handleOptionClick(agent)}
						>
							<Styled.Avatar
								src={`${agent?.thumbnail.path}.${agent?.thumbnail.extension}`}
								alt={`${agent?.name} avatar`}
							/>
							<Styled.Name>{agent.name}</Styled.Name>
						</Styled.Option>
					))}
				</Styled.OptionsList>
			</Styled.OptionsContainer>
		</Styled.DropdownContainer>
	)
}

export default DropdownAtom
