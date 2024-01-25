export interface IImageAtom {
	src: string
	alt: string
}

export interface IInputAtom {
	type: string
}

export interface IButtomAtom {
	text?: string
}

export interface ITitleAtom {
	text: string
	color: string
}

export interface ILinkAtom {
	url?: string
	text: string
}

export interface IButtonImage {
	icon: string
	type: string
}
