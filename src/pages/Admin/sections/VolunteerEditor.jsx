import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

export default function VolunteerEditor() {
  const [volunteerLink, setVolunteerLink] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function fetchSettings() {
      try {
        const snap = await getDoc(doc(db, 'settings', 'main'))
        if (snap.exists() && snap.data().volunteerLink) {
          setVolunteerLink(snap.data().volunteerLink)
        }
      } catch (err) {
        console.error('Failed to load settings:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchSettings()
  }, [])

  async function save() {
    setSaving(true)
    try {
      await setDoc(doc(db, 'settings', 'main'), { volunteerLink }, { merge: true })
    } catch (err) {
      console.error('Save failed:', err)
      alert('Save failed. Check your Firestore permissions.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-sm text-[#7a6555]">Loading...</p>

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#7a6555]">Volunteer Sign-Up Link</label>
      <div className="flex gap-2">
        <input
          type="url"
          value={volunteerLink}
          onChange={(e) => setVolunteerLink(e.target.value)}
          placeholder="https://..."
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
        />
        <button
          onClick={save}
          disabled={saving}
          className="bg-[#a32638] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#8a1e2f] transition-colors disabled:opacity-60 flex-shrink-0"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  )
}
