import { Outlet, useNavigate } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { APP_PATHS } from '~/app/app.const.ts'
import { BOOTH_PATHS } from '~/booth/booth.const.ts'

export const App = () => {
	const isRoot = useMatch(APP_PATHS.root)
	const navigate = useNavigate()

	useEffect(() => {
		isRoot && navigate(BOOTH_PATHS.root)
	}, [isRoot, navigate])

	return (
		<main>
			<Outlet />
		</main>
	)
}
