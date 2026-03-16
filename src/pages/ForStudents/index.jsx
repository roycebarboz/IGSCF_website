import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ScrollReveal from '../../components/ui/ScrollReveal'
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
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#a32638] focus:font-semibold focus:rounded">
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content">
      {/* Page header */}
      <ScrollReveal variant="fadeIn" delay={100}>
        <div className="bg-gray-100 pt-10 pb-2 text-center">
          <span className="inline-block border border-[#a32638] text-[#a32638] text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Programs &amp; Activities
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-[#2c1a0e]">What We Do</h1>
        </div>
      </ScrollReveal>

      {/* Sticky scroll-anchor nav */}
      <nav role="navigation" aria-label="Page sections" className="border-b border-gray-200 bg-gray-100 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div role="tablist" className="flex gap-0 overflow-x-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                role="tab"
                aria-selected={activeId === link.id}
                tabIndex={activeId === link.id ? 0 : -1}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-2 px-3 py-3 sm:px-5 sm:py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeId === link.id
                    ? 'text-[#a32638] border-[#a32638]'
                    : 'text-[#7a6555] border-transparent hover:text-[#a32638] hover:border-[#a32638]/50'
                }`}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="friday" role="tabpanel">     <ScrollReveal variant="fadeUp"><FridayNights /></ScrollReveal> </div>
      <div id="events" role="tabpanel">     <ScrollReveal variant="fadeUp"><SpecialEvents /></ScrollReveal></div>
      <div id="homegroups" role="tabpanel"> <ScrollReveal variant="fadeUp"><HomeGroups /></ScrollReveal>   </div>
      <div id="english" role="tabpanel">    <ScrollReveal variant="fadeUp"><EnglishClass /></ScrollReveal> </div>
      <div id="volunteer" role="tabpanel">  <ScrollReveal variant="fadeUp"><Volunteer /></ScrollReveal>    </div>

      </main>
      <Footer />
    </div>
  )
}
