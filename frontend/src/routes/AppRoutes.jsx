import { Route, Routes } from 'react-router-dom'

import RootLayout from '@/layouts/RootLayout'

import HomePage from '@/pages/HomePage'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsAndConditions from '@/pages/TermsAndCondition'

import Login from '@/pages/Login'
import RegisterPage from '@/pages/RegisterPage'
import ForgetPassword from '@/pages/ForgetPassword'
import ResetPassword from '@/pages/ResetPassword'

import HelpCenter from '@/pages/HelpCenter'
import NotFoundPage from '@/pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>

      {/* Main Layout — Navbar + Footer on every page, including auth */}
      <Route element={<RootLayout />}>

        {/* Home */}
        <Route
          index
          element={<HomePage />}
        />

        {/* Company */}
        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />

        {/* Support */}
        <Route
          path="help"
          element={<HelpCenter />}
        />

        {/* Legal */}
        <Route
          path="privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="terms-and-condition"
          element={<TermsAndConditions />}
        />

        {/* Authentication */}
        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="register"
          element={<RegisterPage />}
        />

        <Route
          path="forgot-password"
          element={<ForgetPassword />}
        />

        <Route
          path="reset-password"
          element={<ResetPassword />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Route>

    </Routes>
  )
}