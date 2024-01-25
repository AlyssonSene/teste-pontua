import styled from 'styled-components'

export const MainLoginPage = styled.div`
	display: flex;
	flex-direction: column;
	background: #00113d;
	width: 100%;
	height: 100vh;
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const LogoContainer = styled.div`
	padding: 49px 0 0 106px;
	width: 169px;
	height: 50px;
`

export const BuildingContainer = styled.div`
	display: flex;
	width: 614px;
	height: 467.85px;
	margin: 141px 0 0 161px;
`

export const FormLoginContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	width: 380px;
	height: 433px;
	border-radius: 28px;
	background: white;
	margin: 167px 68px 0 0;
`
export const LoginButtom = styled.button`
	display: flex;
	width: 308px;
	height: 57px;
	padding: 16px 107px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 10px;
	background: var(--blue-600, #081b4e);
	color: var(--gray-150, #fbfbfb);
	text-align: right;
	font-family: Epilogue;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -1.56px;
	cursor: pointer;
`

export const StyledSpan = styled.span`
	color: ${props => props.color};
`

export const LoginFormTitle = styled.div`
	color: var(--blue-600, #081b4e);
	width: 100%;
	text-align: left;
	padding: 0 33px;
	font-family: Epilogue;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -2.34px;
`
export const LoginFormSubtitle = styled.div`
	width: 310px;
	color: var(--gray-500, #777);
	font-family: Epilogue;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 127%;
	letter-spacing: -1.04px;
`

export const LoginEmailInput = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	border: 0.7px solid var(--blue-500, #293d71);
	background: var(--white-0, #fff);
	width: 306px;
	& > input {
		border: none;
		outline: none;
		display: inline-flex;
		padding: 20px 0;
		align-items: center;
		color: var(--blue-500, #293d71);
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -1.04px;
	}
`
export const LoginPassInput = styled.div`
	& > input {
		width: 308px;
		padding: 20px 15px;
		border-radius: 10px;
		border: 0.7px solid var(--gray-400, #b7b7b7);
		background: var(--white-0, #fff);
		color: var(--gray-400, #b7b7b7);
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.91px;
	}
`

export const InputIcon = styled.div`
	& > button {
		border: none;
		cursor: pointer;
	}
`

export const LinkForgotPass = styled.div`
	width: 100%;
	height: 14px;
	padding-right: 38px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 0 36px 0 10px;
	& > a {
		color: var(--orange-700, #f21a05);
		text-align: right;
		font-family: Epilogue;
		font-size: 11px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.715px;
	}
	& > img {
		width: 14px;
		height: 14px;

		margin-right: 5px;
	}
`
