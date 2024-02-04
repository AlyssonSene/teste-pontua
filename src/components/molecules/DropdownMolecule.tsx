import React, { useState } from 'react'
import * as Styled from '../../styles/dropdownStyles'
import { IAgent, IOptionsSelect } from '../../interfaces/interfaces'
import { useAppContext } from '../../context/hook'
import ImageAtom from '../atoms/ImageAtom'
import profileIcon from '../../assets/profileIcon.svg'
import InputAtom from '../atoms/InputAtom'

const DropdownAtom: React.FC<IOptionsSelect> = ({ agents }) => {
	const { state } = useAppContext()
	const [isOpen, setIsOpen] = useState(false)
	const [rotated, setRotated] = useState(false)

	const handleOptionClick = (agent: IAgent) => {
		state.setSelectedAgent(agent)
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
				{!state.selectedAgent ? (
					<Styled.SelectedOption>
						<Styled.FilterDropdown>
							<ImageAtom src={profileIcon} alt='profile icon' />
							<InputAtom placeholder='Selecione um agent' type={'text'} />
						</Styled.FilterDropdown>
					</Styled.SelectedOption>
				) : (
					<Styled.SelectedOption>
						<Styled.Avatar
							src={`${state.selectedAgent.thumbnail.path}.${state.selectedAgent.thumbnail.extension}`}
							alt={`${state.selectedAgent.name} avatar`}
						/>
						<Styled.Name>{state.selectedAgent.name}</Styled.Name>
					</Styled.SelectedOption>
				)}
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
