import styled from 'styled-components'

export const HomePageContainer = styled.div`
	display: flex;
	height: 100vh;
	background: #d82a2a;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const HomeMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 256px;
	background: #fff;
	box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`

export const SearchBarContainer = styled.div`
	width: 100vw;
	height: 80px;
	background: #fff;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 37px;
	& > img {
		width: 20px;
		height: 20px;
	}
	& > input {
		padding: 20px;
		outline: none;
		margin: 0 16px;
		border: none;
		width: 321px;
		height: 22px;
		color: var(--blue-200, #747d94);
		font-family: Epilogue;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.36px;
	}
`

export const LogoContainer = styled.div`
	margin: 20px 125px 21px 26.22px;
	width: 104.775px;
	height: 26.281px;
	flex-shrink: 0;
`

export const HomeButtonContainer = styled.div`
	display: flex;
	align-items: center;
	width: 220px;
	height: 34px;
	& > span {
		margin-top: 5px;
		margin-left: 10px;
		display: flex;
		height: 12px;
		justify-content: center;
		align-items: center;
		color: var(--black, #000);
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.39px;
		cursor: pointer;
	}
`

export const LogoutButtonContainer = styled.div`
	display: flex;
	align-items: center;
	width: 220px;
	height: 34px;
	margin-top: 50px;
	& > span {
		margin-top: 5px;
		margin-left: 10px;
		display: flex;
		height: 12px;
		justify-content: center;
		align-items: center;
		color: var(--black, #000);
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.39px;
		cursor: pointer;
	}
`

export const CardsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`

export const Card = styled.div`
	display: flex;
	margin: 20px;
	align-items: center;
	padding: 14px 10px;
	border-radius: 15px;
	background: #eaecf0;
	box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
`

export const CardImage = styled.div`
	width: 83px;
	height: 119px;
	margin: 0 15px;
`

export const CardDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
`

export const AgentName = styled.div`
	& span {
		color: var(--black, #000);
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -0.48px;
	}
`

export const AgentDescription = styled.div`
	width: 140px;
	& > span {
		color: var(--black, #000);
		font-family: Epilogue;
		font-size: 12px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
		letter-spacing: -0.36px;
	}
`
