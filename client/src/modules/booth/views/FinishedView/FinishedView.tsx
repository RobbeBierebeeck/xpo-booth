import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QRCode from 'react-qr-code'
import {
	FinishedViewContainer,
	StyledButton,
	StyledImage,
	StyledImagePreview,
} from '~/booth/views/FinishedView/FinishedView.styles.tsx'
import { APP_PATHS } from '~/app/app.const.ts'

export const FinishedView: FC = () => {
	const navigate = useNavigate()
	const data = useLocation().state.data

	return (
		<>
			<FinishedViewContainer>
				<StyledImagePreview>
					{data && data.url && (
						<>
							<StyledImage src={data.url} alt="" />
							<QRCode value={data.url} />
						</>
					)}
				</StyledImagePreview>
				<StyledButton onClick={() => navigate(APP_PATHS.root)}>
					Take another
				</StyledButton>
			</FinishedViewContainer>
		</>
	)
}
