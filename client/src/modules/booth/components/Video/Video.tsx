import { FC, useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
export const Video: FC = () => {
	const webcamRef = useRef(null)

	const capture = useCallback(() => {
		if (!webcamRef.current) return

		const imageSrc = webcamRef.current.getScreenshot()
		console.log(imageSrc)
		//convert imageSrc to base64
		const base64 = imageSrc.split(',')[1]
		console.log(base64)

		window.open(imageSrc)
	}, [webcamRef])
	return (
		<>
			<Webcam
				allowFullScreen={true}
				screenshotFormat="image/jpeg"
				ref={webcamRef}
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: -1,
				}}
				width="100%"
				height="auto"
			/>
			<button onClick={capture}>capture</button>
		</>
	)
}
