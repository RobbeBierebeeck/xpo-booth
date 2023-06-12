import { createBrowserRouter } from 'react-router-dom'
import { APP_PATHS } from '~/app/app.const.ts'
import { App } from '~/app/components'
import { BOOTH_ROUTES } from '~/booth/booth.routes.tsx'

export const router = createBrowserRouter([
	{
		path: APP_PATHS.root,
		element: <App />,
		children: [...BOOTH_ROUTES],
	},
])
