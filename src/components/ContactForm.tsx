import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const initial = { name: '', email: '', shootType: 'Wedding', message: '', 'bot-field': '' }

export function ContactForm() {
  const [fields, setFields] = useState(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'inquiry', ...fields }),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-[var(--line)] rounded-sm p-8 animate-rise">
        <p className="font-display text-2xl italic text-[var(--copper-bright)] mb-2">
          Message received.
        </p>
        <p className="text-[var(--ink-dim)] leading-relaxed">
          We read every inquiry ourselves — expect a reply within two business days via email or WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="inquiry" />
      <p className="hidden">
        <label>
          Leave this empty
          <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-[0.18em] uppercase text-[var(--ink-dim)] mb-2">
            Name
          </label>
          <input
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--copper)] transition-colors placeholder:text-[var(--ink-dim)]/40"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] uppercase text-[var(--ink-dim)] mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="you@somewhere.com"
            className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--copper)] transition-colors placeholder:text-[var(--ink-dim)]/40"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.18em] uppercase text-[var(--ink-dim)] mb-2">
          What are we shooting
        </label>
        <select
          name="shootType"
          value={fields.shootType}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--copper)] transition-colors"
        >
          <option className="bg-[var(--ground-raised)]">Wedding or elopement</option>
          <option className="bg-[var(--ground-raised)]">Brand or documentary film</option>
          <option className="bg-[var(--ground-raised)]">Editorial portrait</option>
          <option className="bg-[var(--ground-raised)]">Something else</option>
        </select>
      </div>

      <div>
        <label className="block text-xs tracking-[0.18em] uppercase text-[var(--ink-dim)] mb-2">
          Tell us about it
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="Dates, location, the shape of what you're imagining..."
          className="w-full bg-transparent border-b border-[var(--line)] py-2 focus:outline-none focus:border-[var(--copper)] transition-colors resize-none placeholder:text-[var(--ink-dim)]/40"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-[#c9694b]">
          That didn't send. Try again, or contact us directly at info.alrine@gmail.com or +256785157237 on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative mt-2 inline-flex items-center gap-3 border border-[var(--copper)] text-[var(--copper-bright)] px-7 py-3 rounded-sm overflow-hidden transition-colors hover:text-[var(--ground)] disabled:opacity-50"
      >
        <span className="absolute inset-0 bg-[var(--copper)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        <span className="relative tracking-[0.1em] uppercase text-sm">
          {status === 'sending' ? 'Sending…' : 'Send inquiry'}
        </span>
      </button>
    </form>
  )
}
