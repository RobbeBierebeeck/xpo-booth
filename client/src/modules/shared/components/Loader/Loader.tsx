import { FC } from 'react'
import { LoaderProps } from './Loader.types'
import { StyledLoader } from './Loader.styles'

export const Loader: FC<LoaderProps> = ({ loading, children }) => {
	return (
		<>
			{loading ? (
				<StyledLoader>
					<img src="/waiting.gif" alt="gif of somweon waiting" />
				</StyledLoader>
			) : (
				children
			)}
		</>
	)
}
