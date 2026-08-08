import { Outlet } from 'react-router-dom'

/**
 * Shell rendered around every route. Header, navigation and footer belong here
 * once the real design exists.
 */
export default function RootLayout() {
  return (
    <div className="app-shell">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
