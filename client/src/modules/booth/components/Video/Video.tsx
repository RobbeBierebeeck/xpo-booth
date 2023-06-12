import { FC, useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
import { VideoProps } from './Video.types.ts'
import { StyledButton, StyledWebcam } from './Video.styles.tsx'

export const Video: FC<VideoProps> = ({ onTakePhoto }) => {
	const webcamRef = useRef<Webcam>(null)

	const capture = useCallback(() => {
		if (!webcamRef.current) return
		const imageSrc = webcamRef.current.getScreenshot() as string
		const base64 = imageSrc.split(',')[1]
		onTakePhoto(base64)
	}, [webcamRef, onTakePhoto])

	return (
		<>
			<StyledWebcam
				allowFullScreen={true}
				screenshotFormat="image/jpeg"
				ref={webcamRef}
			/>
			<StyledButton onClick={capture}></StyledButton>
		</>
	)
}
