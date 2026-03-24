import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ForStudents from './pages/ForStudents'
import About from './pages/About/About'
import PartnerWithUs from './pages/Partner/Partner'
import Privacy from './pages/Privacy/Privacy'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ProtectedRoute from './pages/Admin/ProtectedRoute'

export default function App() {
  return (
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
  )
}
