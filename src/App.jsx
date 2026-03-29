import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/Admin/ProtectedRoute'

const Home = lazy(() => import('./pages/Home/Home'))
const ForStudents = lazy(() => import('./pages/ForStudents'))
const About = lazy(() => import('./pages/About/About'))
const PartnerWithUs = lazy(() => import('./pages/Partner/Partner'))
const Privacy = lazy(() => import('./pages/Privacy/Privacy'))
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'))

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<ForStudents />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  )
}
