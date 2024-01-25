import React from 'react'
import { IImageAtom } from '../../interfaces/interfaces'

const ImageAtom: React.FC<IImageAtom> = ({ src, alt }) => {
	return <img src={src} alt={alt} />
}

export default ImageAtom
