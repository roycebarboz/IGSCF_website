import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import EventsEditor from './sections/EventsEditor'
import HomeGroupsEditor from './sections/HomeGroupsEditor'
import VolunteerEditor from './sections/VolunteerEditor'
import PartnerEditor from './sections/PartnerEditor'
import { NoteCard } from './sections/NotesEditor'

const TABS = ['Special Events', 'Friday Nights', 'English Class', 'Home Groups', 'Volunteer', 'Partner']

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  async function handleLogout() {
    await logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] flex flex-col">
      <Navbar />

      {/* Admin sub-header */}
      <header className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest">Admin Portal</p>
          <h1 className="text-lg font-bold text-[#2c1a0e]">IGSCF Content Manager</h1>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-[#7a6555] hidden sm:block">{user?.email}</p>
          <button
            onClick={handleLogout}
            className="text-xs text-[#7a6555] border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 overflow-x-auto">
        <div className="flex min-w-max">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`text-sm font-semibold px-4 py-3 border-b-2 transition-colors ${
                activeTab === i
                  ? 'border-[#a32638] text-[#a32638]'
                  : 'border-transparent text-[#7a6555] hover:text-[#2c1a0e]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-8 py-8">
        {activeTab === 0 && <EventsEditor />}
        {activeTab === 1 && (
          <NoteCard
            id="friday_nights"
            label="Friday Nights"
            placeholder="e.g. Not happening this week due to spring break."
          />
        )}
        {activeTab === 2 && (
          <NoteCard
            id="english_class"
            label="English Class"
            placeholder="e.g. Meetup is at the home group host's place this week."
          />
        )}
        {activeTab === 3 && <HomeGroupsEditor />}
        {activeTab === 4 && <VolunteerEditor />}
        {activeTab === 5 && <PartnerEditor />}
      </main>

      <Footer />
    </div>
  )
}
