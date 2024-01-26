import React, { useState } from 'react'
import * as Styled from '../../styles/dropdownStyles'
import { IOptions, IOptionsSelect } from '../../interfaces/interfaces'

const DropdownAtom: React.FC<IOptionsSelect> = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [agent, setAgent] = useState<IOptions | null>(options[0])

	const handleOptionClick = (agent: IOptions) => {
		setAgent(agent)
		setIsOpen(!isOpen)
	}

	return (
		<Styled.DropdownContainer>
			<Styled.DropdownButton onClick={() => setIsOpen(!isOpen)}>
				<Styled.SelectedOption>
					<Styled.Avatar src={agent?.avatar} alt={'avatar'} />
					<Styled.Name>{agent?.name}</Styled.Name>
				</Styled.SelectedOption>
				<Styled.CaretIcon />
			</Styled.DropdownButton>
			<Styled.OptionsContainer style={{ display: isOpen ? 'block' : 'none' }}>
				<Styled.OptionsList>
					{options.map(option => (
						<Styled.Option
							key={option.id}
							onClick={() => handleOptionClick(option)}
						>
							<Styled.Avatar src={option.avatar} alt={option.name} />
							<Styled.Name>{option.name}</Styled.Name>
						</Styled.Option>
					))}
				</Styled.OptionsList>
			</Styled.OptionsContainer>
		</Styled.DropdownContainer>
	)
}

export default DropdownAtom
