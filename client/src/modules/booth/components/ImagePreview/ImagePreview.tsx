import { FC } from 'react'
import {
	ButtonsWrapper,
	StyledButton,
	StyledImage,
	StyledImagePreview,
} from './ImagePreview.styles.tsx'
import { ImagePreviewProps } from './ImagePreview.types.ts'

export const ImagePreview: FC<ImagePreviewProps> = ({
	image,
	onRetake,
	onSave,
}) => {
	return (
		<StyledImagePreview>
			<StyledImage
				src={`data:image/jpeg;base64,${image}`}
				alt="preview"
			/>
			<ButtonsWrapper>
				<StyledButton onClick={onRetake}>Retake</StyledButton>
				<StyledButton onClick={onSave} isPrimary={true}>
					Save
				</StyledButton>
			</ButtonsWrapper>
		</StyledImagePreview>
	)
}
