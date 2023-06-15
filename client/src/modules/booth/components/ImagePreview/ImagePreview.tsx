import { FC } from 'react'
import {
  ButtonsWrapper,
  StyledButton,
  StyledImage,
  StyledImagePreview,
  StyledImagePreviewTitle,

} from './ImagePreview.styles.tsx'
import { ImagePreviewProps } from './ImagePreview.types.ts'

export const ImagePreview: FC<ImagePreviewProps> = ({
  image,
  onRetake,
  onSave,
  backdrop,
}) => {
  const isSaveButtonEnabled = backdrop > 0;

  return (
    <StyledImagePreview>
		<StyledImagePreviewTitle>Choose a backdrop below</StyledImagePreviewTitle>
      <StyledImage
        src={`data:image/jpeg;base64,${image}`}
        alt="preview"
      />
      <ButtonsWrapper>
        <StyledButton onClick={onRetake}>Retake</StyledButton>
        <StyledButton onClick={onSave} disabled={!isSaveButtonEnabled} isPrimary={true}>
          Save
        </StyledButton>
      </ButtonsWrapper>
    </StyledImagePreview>
  )
}
