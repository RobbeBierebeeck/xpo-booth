import { FC } from 'react'
import {
	StyledImagePreviewInterface,
	InterfaceOption,
	InterfaceOptionImage,
} from './ImagePreviewInterface.styles.tsx'
import { ImagePreviewInterfaceProps } from './ImagePreviewInterface.types.ts'

export const ImagePreviewInterface: FC<ImagePreviewInterfaceProps> = ({
	backdrop,
	setBackdrop,
}) => {
	return (
		<StyledImagePreviewInterface>
			<InterfaceOption> 
				<InterfaceOptionImage 
					src={`3.png`} 
					alt="preview" 
					onClick={() => {setBackdrop(backdrop === 1 ? 0 : 1);}} 
					border={backdrop === 1 ? true : false}
				/>
			</InterfaceOption>
			<InterfaceOption> 
				<InterfaceOptionImage 
					src={`2.png`} 
					alt="preview" 
					onClick={() => {setBackdrop(backdrop === 2 ? 0 : 2);}} 
					border={backdrop === 2 ? true : false}
				/>
			</InterfaceOption>
			<InterfaceOption> 
				<InterfaceOptionImage 
					src={`1.png`}
					alt="preview" 
					onClick={() => {setBackdrop(backdrop === 3 ? 0 : 3);}} 
					border={backdrop === 3 ? true : false}
				/>
			</InterfaceOption>
		</StyledImagePreviewInterface>
	)
}
