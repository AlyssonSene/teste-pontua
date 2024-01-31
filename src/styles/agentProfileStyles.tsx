import { styled } from 'styled-components'

export const AgentProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	padding: 86px;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`

export const AgentNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 169px;
	height: 25px;
	margin-bottom: 23px;
	background-color: #ffffff;
	& > :nth-last-child(3) {
		color: #081b4e;
		font-family: Epilogue;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.72px;
	}

	& > :nth-last-child(2) {
		color: #f43724;
		font-family: Epilogue;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.72px;
	}

	& > :nth-last-child(1) {
		color: #777;
		font-family: Epilogue;
		font-size: 24px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		letter-spacing: -0.72px;
	}
`

export const MenubarContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 38px;
`

export const MenuOptions = styled.div`
	margin-right: 16px;
	height: 38px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > span {
		color: #081b4e;
		font-family: Epilogue;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		& > a {
			text-decoration: none;
			color: #081b4e;
		}
		& > a:visited {
			text-decoration: none;
			color: #081b4e;
		}
	}
`

export const UnderLine = styled.span`
	display: block;
	width: 100%;
	height: 2px;
	background: #081b4e;
	margin-top: 0.5rem;
`

export const AboutAgentContainer = styled.div`
	margin-top: 27px;
	padding: 42px 34px;
	height: 226px;
	display: flex;
	border-radius: 15px;
	box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
`

export const DescriptionContainer = styled.div`
	margin-left: 31px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

export const AgentName = styled.div`
	height: 34px;
	& > span {
		color: var(--blue-600, #081b4e);
		font-family: Epilogue;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.72px;
	}
`

export const AgentDescription = styled.span`
	color: #717171;
	font-family: Epilogue;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 153.5%; /* 24.56px */
	letter-spacing: -0.48px;
`

export const InfosContainer = styled.div`
	display: flex;
	margin: 40px 0 0 10px;
	flex-direction: column;
	align-items: flex-start;
	& ul {
		margin-left: 10px;
		color: #667085;
		& li {
			padding: 5px;
		}
	}
`
