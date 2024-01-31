export interface IImageAtom {
	src: string
	alt: string
}

export interface IInputAtom {
	type: string
	placeholder: string
}

export interface IButtomAtom {
	text: string
}

export interface ITitleAtom {
	text: string
	color?: string
}

export interface ILinkAtom {
	url?: string
	text: string
}

export interface IButtonImage {
	icon: string
	type: string
}

export interface IOptions {
	avatar: string
	name: string
	id: number
}

export interface IOptionsSelect {
	options: IOptions[]
}

export interface ICaretIconProps {
	rotate: string
}

export interface ISpan {
	text: string
}

export interface IListOptions {
	list: string[]
}
