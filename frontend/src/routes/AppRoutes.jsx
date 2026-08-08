import { Route, Routes } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

/**
 * Central route table. Add feature routes as children of RootLayout so they
 * all inherit the shared shell.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
