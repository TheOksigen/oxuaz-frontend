/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import Header from '../components/header'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    })
    const isAdminRoute = pathname.startsWith('/admin')

    return (
        <>
            {!isAdminRoute && <Header />}
            <Outlet />
        </>
    )
}
