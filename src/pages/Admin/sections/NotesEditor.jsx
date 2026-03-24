import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/config'

export function NoteCard({ id, label, placeholder }) {
  const [text, setText] = useState('')
  const [original, setOriginal] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function fetch() {
      try {
        const snap = await getDoc(doc(db, 'notes', id))
        const val = snap.exists() ? snap.data().text ?? '' : ''
        setText(val)
        setOriginal(val)
      } catch {
        // Firestore not configured yet
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  async function save() {
    setSaving(true)
    try {
      await setDoc(doc(db, 'notes', id), { text: text.trim() })
      setOriginal(text.trim())
      setText(text.trim())
    } catch (err) {
      console.error('Save failed:', err)
      alert('Save failed. Check your Firestore permissions.')
    } finally {
      setSaving(false)
    }
  }

  async function clear() {
    if (!confirm('Clear this note? It will stop showing on the site.')) return
    setSaving(true)
    try {
      await setDoc(doc(db, 'notes', id), { text: '' })
      setText('')
      setOriginal('')
    } catch (err) {
      console.error('Clear failed:', err)
      alert('Clear failed.')
    } finally {
      setSaving(false)
    }
  }

  const isDirty = text.trim() !== original

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[#2c1a0e] text-sm">{label}</h3>
        {original && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
            Live
          </span>
        )}
        {!original && !loading && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7a6555] bg-gray-100 px-2 py-0.5 rounded-full">
            No note
          </span>
        )}
      </div>

      {loading ? (
        <p className="text-xs text-[#7a6555]">Loading...</p>
      ) : (
        <>
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] bg-[#faf6f0] focus:outline-none focus:border-[#a32638] resize-none"
          />
          <p className="text-xs text-[#7a6555]">
            Leave empty and save to hide the note from the site.
          </p>
          <div className="flex gap-2 justify-end">
            {original && (
              <button
                onClick={clear}
                disabled={saving}
                className="text-xs text-red-500 border border-red-200 px-4 py-1.5 rounded-full hover:bg-red-50 transition-colors disabled:opacity-60"
              >
                Clear note
              </button>
            )}
            <button
              onClick={save}
              disabled={saving || !isDirty}
              className="bg-[#a32638] text-white text-xs font-semibold px-5 py-1.5 rounded-full hover:bg-[#8a1e2f] transition-colors disabled:opacity-60"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

