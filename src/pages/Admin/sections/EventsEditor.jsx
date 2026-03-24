import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { events as staticEvents } from '../../../data/events'

const defaultForm = { title: '', description: '', bg: '#3d1f0f', order: 0 }

export default function EventsEditor() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null) // null = none, 'new' = add form
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [seeding, setSeeding] = useState(false)

  async function fetchEvents() {
    setLoading(true)
    try {
      const q = query(collection(db, 'events'), orderBy('order'))
      const snap = await getDocs(q)
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    } catch (err) {
      console.error('Failed to fetch events:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchEvents() }, [])

  // Copies the static events.js data into Firestore on first use
  async function seedFromStatic() {
    setSeeding(true)
    try {
      for (let i = 0; i < staticEvents.length; i++) {
        const e = staticEvents[i]
        await addDoc(collection(db, 'events'), {
          title: e.title,
          description: e.description,
          bg: e.bg,
          order: i,
        })
      }
      await fetchEvents()
    } catch (err) {
      console.error('Seeding failed:', err)
    } finally {
      setSeeding(false)
    }
  }

  function startEdit(event) {
    setEditingId(event.id)
    setForm({
      title: event.title,
      description: event.description,
      bg: event.bg,
      order: event.order ?? 0,
    })
  }

  function startAdd() {
    setEditingId('new')
    setForm({ ...defaultForm, order: events.length })
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(defaultForm)
  }

  async function saveEvent() {
    setSaving(true)
    const data = {
      title: form.title.trim(),
      description: form.description.trim(),
      bg: form.bg,
      order: Number(form.order),
    }
    try {
      if (editingId === 'new') {
        await addDoc(collection(db, 'events'), data)
      } else {
        await updateDoc(doc(db, 'events', editingId), data)
      }
      await fetchEvents()
      cancelEdit()
    } catch (err) {
      console.error('Save failed:', err)
      alert('Save failed. Check your Firestore permissions.')
    } finally {
      setSaving(false)
    }
  }

  async function deleteEvent(id) {
    if (!confirm('Delete this event?')) return
    try {
      await deleteDoc(doc(db, 'events', id))
      await fetchEvents()
    } catch (err) {
      console.error('Delete failed:', err)
      alert('Delete failed.')
    }
  }

  if (loading) return <p className="text-sm text-[#7a6555]">Loading events...</p>

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#7a6555]">
          {events.length} event{events.length !== 1 ? 's' : ''}
        </p>
        <div className="flex gap-2">
          {events.length === 0 && (
            <button
              onClick={seedFromStatic}
              disabled={seeding}
              className="text-xs border border-[#a32638] text-[#a32638] px-3 py-1.5 rounded-full hover:bg-[#a32638]/10 transition-colors disabled:opacity-60"
            >
              {seeding ? 'Seeding...' : 'Import from static data'}
            </button>
          )}
          <button
            onClick={startAdd}
            className="bg-[#a32638] text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-[#8a1e2f] transition-colors"
          >
            + Add Event
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {events.map((event) =>
          editingId === event.id ? (
            <EventForm
              key={event.id}
              form={form}
              setForm={setForm}
              onSave={saveEvent}
              onCancel={cancelEdit}
              saving={saving}
            />
          ) : (
            <div key={event.id} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4">
              <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: event.bg }} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#2c1a0e] text-sm">{event.title}</p>
                <p className="text-[#7a6555] text-xs mt-0.5 line-clamp-2">{event.description}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => startEdit(event)}
                  className="text-xs text-[#a32638] border border-[#a32638]/30 px-3 py-1 rounded-full hover:bg-[#a32638]/10 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="text-xs text-red-500 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}

        {editingId === 'new' && (
          <EventForm
            form={form}
            setForm={setForm}
            onSave={saveEvent}
            onCancel={cancelEdit}
            saving={saving}
            isNew
          />
        )}
      </div>
    </div>
  )
}

function EventForm({ form, setForm, onSave, onCancel, saving, isNew }) {
  return (
    <div className="bg-[#faf6f0] rounded-xl border border-[#e8ddd4] p-4 flex flex-col gap-3">
      <p className="text-xs font-semibold text-[#2c1a0e] uppercase tracking-wider">
        {isNew ? 'New Event' : 'Edit Event'}
      </p>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Card Background Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={form.bg}
            onChange={(e) => setForm((f) => ({ ...f, bg: e.target.value }))}
            className="w-10 h-9 rounded cursor-pointer border border-gray-200"
          />
          <span className="text-xs text-[#7a6555]">{form.bg}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Event Title</label>
        <input
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          placeholder="Thanksgiving Dinner"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] bg-white focus:outline-none focus:border-[#a32638]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-[#7a6555]">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          rows={3}
          placeholder="Describe the event..."
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#2c1a0e] bg-white focus:outline-none focus:border-[#a32638] resize-none"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          onClick={onCancel}
          className="text-sm text-[#7a6555] px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-[#a32638] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#8a1e2f] transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving...' : 'Save Event'}
        </button>
      </div>
    </div>
  )
}
