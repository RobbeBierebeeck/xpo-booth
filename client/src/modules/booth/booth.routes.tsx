import { RouteObject } from 'react-router-dom'
import { BOOTH_PATHS } from '~/booth/booth.const.ts'
import { BoothView, FinishedView } from '~/booth/views'

export const BOOTH_ROUTES: RouteObject[] = [
	{
		path: BOOTH_PATHS.root,
		element: <BoothView />,
	},
	{
		path: BOOTH_PATHS.finished,
		element: <FinishedView />,
	},
]
