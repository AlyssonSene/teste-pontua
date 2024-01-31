import md5 from 'md5'

export const hashGenerator = (
	ts: string,
	privateKey: string | undefined,
	publicKey: string | undefined
) => {
	const hash = md5(`${ts}${privateKey}${publicKey}`)
	return hash
}
