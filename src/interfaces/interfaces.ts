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
	func?: (agent: IAgent) => void
}

export interface ITitleAtom {
	text?: string
	color?: string
}

export interface ILinkAtom {
	text: string
}

export interface IButtonImage {
	icon: string
	type: string
}
export interface IOptionsSelect {
	agents: IAgent[]
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

interface Thumbnail {
	path: string
	extension: string
}
export interface IAgent {
	id: number
	name: string
	description: string
	modified: string
	thumbnail: Thumbnail
}
