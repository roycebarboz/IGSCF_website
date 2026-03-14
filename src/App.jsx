import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ForStudents from './pages/ForStudents'
import About from './pages/About/About'
import PartnerWithUs from './pages/Partner/Partner'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<ForStudents />} />
      <Route path="/about" element={<About />} />
      <Route path="/partner" element={<PartnerWithUs />} />
    </Routes>
  )
}
