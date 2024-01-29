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
export const LoginButtom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #081b4e;
	width: 306px;
	cursor: pointer;

	& > button {
		border: none;
		padding: 20px 10px;
		background: #081b4e;
		text-align: right;
		font-family: Epilogue;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -1.56px;
		cursor: pointer;
	}
	& > span {
		color: white;
	}
	& > img {
		width: 18px;
		height: 18px;
	}
`

export const StyledSpan = styled.span`
	color: ${props => props.color};
`

export const LoginFormTitle = styled.div`
	color: #081b4e;
	width: 100%;
	text-align: left;
	padding: 0 33px;
	& > span {
		font-family: Epilogue;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: -2.34px;
	}
`
export const LoginFormSubtitle = styled.div`
	width: 310px;
	& > span {
		color: #777;
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 127%;
		letter-spacing: -1.04px;
	}
`

export const LoginEmailInput = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	border: 0.7px solid #293d71;
	background: #fff;
	width: 306px;
	& > input {
		border: none;
		outline: none;
		padding: 20px 0;
		align-items: center;
		color: #293d71;
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		line-height: normal;
		letter-spacing: -1.04px;
	}
`
export const LoginPassInput = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	border: 0.7px solid #b7b7b7;
	background: #fff;
	width: 306px;
	& > input {
		border: none;
		outline: none;
		padding: 20px 0;
		align-items: center;
		color: #b7b7b7;
		font-family: Epilogue;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.91px;
	}
`

export const InputIcon = styled.div`
	width: 13px;
	height: 13px;
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
		color: #f21a05;
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
