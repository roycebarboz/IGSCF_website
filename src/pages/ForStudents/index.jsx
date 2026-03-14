import { useState, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import FridayNights from './sections/FridayNights'
import SpecialEvents from './sections/SpecialEvents'
import HomeGroups from './sections/HomeGroups'
import EnglishClass from './sections/EnglishClass'
import Volunteer from './sections/Volunteer'
import { CalendarIcon, StarIcon, HomeIcon, BookIcon, HandIcon } from './icons'

const navLinks = [
  { id: 'friday',     label: 'Friday Nights',  icon: <CalendarIcon /> },
  { id: 'events',     label: 'Special Events', icon: <StarIcon /> },
  { id: 'homegroups', label: 'Home Groups',    icon: <HomeIcon /> },
  { id: 'english',    label: 'English Class',  icon: <BookIcon /> },
  { id: 'volunteer',  label: 'Volunteer',      icon: <HandIcon /> },
]

export default function ForStudents() {
  const [activeId, setActiveId] = useState('friday')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar />

      {/* Page header */}
      <div className="bg-[#faf6f0] pt-10 pb-2 text-center">
        <span className="inline-block border border-[#a32638] text-[#a32638] text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
          Programs &amp; Activities
        </span>
        <h1 className="text-4xl font-bold text-[#2c1a0e]">What We Do</h1>
      </div>

      {/* Sticky scroll-anchor nav */}
      <div className="border-b border-gray-200 bg-[#faf6f0] sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex gap-0 overflow-x-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeId === link.id
                    ? 'text-[#a32638] border-[#a32638]'
                    : 'text-[#7a6555] border-transparent hover:text-[#a32638] hover:border-[#a32638]/50'
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="friday">     <FridayNights /> </div>
      <div id="events">     <SpecialEvents /></div>
      <div id="homegroups"> <HomeGroups />   </div>
      <div id="english">    <EnglishClass /> </div>
      <div id="volunteer">  <Volunteer />    </div>

      <Footer />
    </div>
  )
}
