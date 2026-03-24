import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

const DEFAULTS = {
  partnerFormLink: 'https://forms.gle/demo',
  partnerEmail: 'partner@igscf.org',
  partnerPhone: '',
}

export default function PartnerEditor() {
  const [fields, setFields] = useState(DEFAULTS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'

  useEffect(() => {
    async function fetchSettings() {
      try {
        const snap = await getDoc(doc(db, 'settings', 'main'))
        if (snap.exists()) {
          const data = snap.data()
          setFields({
            partnerFormLink: data.partnerFormLink ?? DEFAULTS.partnerFormLink,
            partnerEmail: data.partnerEmail ?? DEFAULTS.partnerEmail,
            partnerPhone: data.partnerPhone ?? DEFAULTS.partnerPhone,
          })
        }
      } catch (err) {
        console.error('Failed to load settings:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchSettings()
  }, [])

  function update(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  async function save() {
    setSaving(true)
    setStatus(null)
    try {
      await setDoc(doc(db, 'settings', 'main'), fields, { merge: true })
      setStatus('success')
    } catch (err) {
      console.error('Save failed:', err)
      setStatus('error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <p className="text-sm text-[#7a6555]">Loading...</p>

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Partner Form Link</label>
        <input
          type="url"
          value={fields.partnerFormLink}
          onChange={(e) => update('partnerFormLink', e.target.value)}
          placeholder="https://..."
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Contact Email</label>
        <input
          type="email"
          value={fields.partnerEmail}
          onChange={(e) => update('partnerEmail', e.target.value)}
          placeholder="partner@igscf.org"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Phone Number</label>
        <input
          type="tel"
          value={fields.partnerPhone}
          onChange={(e) => update('partnerPhone', e.target.value)}
          placeholder="+1 (201) 555-0123"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] focus:outline-none focus:border-[#a32638]"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        {status === 'success' && (
          <p className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            Saved successfully.
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            Save failed. Check your Firestore permissions.
          </p>
        )}
        {!status && <span />}
        <button
          onClick={save}
          disabled={saving}
          className="flex-shrink-0 bg-[#a32638] text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#8a1e2f] transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  )
}
