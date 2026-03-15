import { useState } from 'react'

export default function PartnerContact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      className="bg-[#faf6f0] py-16 px-8"
      id="partner-contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-2 text-center">
          Get Involved
        </p>
        <h2
          id="contact-heading"
          className="text-2xl md:text-3xl font-bold text-[#2c1a0e] mb-3 text-center"
        >
          Ready to Partner with Us?
        </h2>
        <p className="text-[#7a6555] text-sm text-center mb-10 leading-relaxed">
          Fill out the form below and we'll be in touch about how you can get
          involved.
        </p>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="text-center py-12 px-8 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            {/* Check icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#a32638]/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#a32638" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#2c1a0e] mb-2">Thank You!</h3>
            <p className="text-[#7a6555] text-sm">
              We received your message and will reach out soon. We're excited to
              partner with you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
            noValidate
          >
            <div>
              <label
                htmlFor="partner-name"
                className="block text-xs font-semibold text-[#4a3728] uppercase tracking-wide mb-1.5"
              >
                Full Name
              </label>
              <input
                id="partner-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#2c1a0e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a32638]/40 focus:border-[#a32638] transition"
              />
            </div>

            <div>
              <label
                htmlFor="partner-email"
                className="block text-xs font-semibold text-[#4a3728] uppercase tracking-wide mb-1.5"
              >
                Email Address
              </label>
              <input
                id="partner-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#2c1a0e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a32638]/40 focus:border-[#a32638] transition"
              />
            </div>

            <div>
              <label
                htmlFor="partner-message"
                className="block text-xs font-semibold text-[#4a3728] uppercase tracking-wide mb-1.5"
              >
                How would you like to help?
              </label>
              <textarea
                id="partner-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how you'd like to get involved..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#2c1a0e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a32638]/40 focus:border-[#a32638] transition resize-none"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                id="partner-form-submit"
                className="w-full bg-[#a32638] text-white text-sm font-semibold py-3.5 rounded-full hover:bg-[#8a1e2f] active:scale-[0.98] transition-all duration-150 shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
