import { styled } from 'styled-components'

export const DropdownContainer = styled.div`
	width: 331px;
	position: relative;
	display: flex;
	justify-content: center;
`

export const DropdownButton = styled.button`
	border-radius: 8px;
	border: 1px solid var(--Gray-300, #d0d5dd);
	background: var(--White, #fff);
	box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
	width: 331px;
	padding: 8px 16px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const SelectedOption = styled.div`
	display: flex;
	align-items: center;
`

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-right: 8px;
`

export const Name = styled.span`
	color: #101828;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	margin: 0 15px;
`

export const CaretIcon = styled.span`
	display: inline-block;
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #333;
	margin-left: 8px;
`

export const OptionsContainer = styled.div`
	position: absolute;
	max-width: 331px;
	overflow-y: auto;
	top: 100%;
	left: 0;
	right: 0;
	background-color: #f0f0f0;
	border: 1px solid #ccc;
	display: none;
`

export const OptionsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	height: 150px;
`

export const Option = styled.li`
	display: flex;
	align-items: center;
	padding: 8px 16px;
	cursor: pointer;

	&:hover {
		background-color: #e0e0e0;
	}
	& > span {
		margin: 0 15px;
		font-family: 'Inter';
		color: var(--Gray-900, #101828);
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`
