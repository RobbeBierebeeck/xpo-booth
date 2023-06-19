import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { VideoProps } from './Video.types.ts'
import { StyledButton, StyledCountDown, StyledWebcam } from './Video.styles.tsx'

export const Video: FC<VideoProps> = ({ onTakePhoto }) => {
	const [countDown, setCountDown] = useState<number>(5)
	const webcamRef = useRef<Webcam>(null)
	const [automatic, setAutomatic] = useState(false)
	const [shutterClicked, setShutterClicked] = useState(false)
	const capture = useCallback(() => {
		if (!webcamRef.current) return
		const imageSrc = webcamRef.current.getScreenshot({
			width: 1080,
			height: 1080,
		}) as string
		const base64 = imageSrc.split(',')[1]
		onTakePhoto(base64)
		setShutterClicked(false)
		setAutomatic(false)
	}, [webcamRef, onTakePhoto])

	useEffect(() => {
		if (automatic) {
			const interval = setInterval(() => {
				setCountDown((prev) => prev - 1)
			}, 1000)
			return () => clearInterval(interval)
		}
	}, [automatic])

	return (
		<>
			<StyledWebcam
				allowFullScreen={true}
				screenshotFormat="image/jpeg"
				ref={webcamRef}
			/>
			<StyledButton
				onClick={() => {
					setCountDown(5)
					setShutterClicked(true)
					setAutomatic(!automatic)
					setTimeout(() => {
						capture()
					}, 5000)
				}}
			>
				{shutterClicked ? (
					<StyledCountDown>{countDown}</StyledCountDown>
				) : null}
			</StyledButton>
		</>
	)
}
