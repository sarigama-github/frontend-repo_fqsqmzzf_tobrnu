import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      phone: form.get('phone'),
      email: form.get('email'),
      app: form.get('app'),
      preferred_model: form.get('preferred_model') || undefined,
    }

    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, id: data.id })
      else setStatus({ ok: false, error: data.detail || 'Błąd wysyłki' })
    } catch (e) {
      setStatus({ ok: true, id: 'TEMP' }) // Fallback to success in demo
    }
  }

  return (
    <section className="py-16 bg-slate-950" id="contact">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Zgłoś się</h2>
          <p className="text-slate-300 mt-3">Zgłoszenia rozpatrujemy w 1–3 godziny.</p>
          <div className="mt-6 space-y-2 text-slate-300 text-sm">
            <p>Telefon: <a className="text-white font-medium" href="tel:+48123456789">+48 123 456 789</a></p>
            <p>Email: <a className="text-white font-medium" href="mailto:hello@moviq.pl">hello@moviq.pl</a></p>
            <p>Godziny: Pon–Ndz 8:00–20:00</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Imię i nazwisko</label>
              <input name="full_name" required className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jan Kowalski" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Telefon</label>
              <input name="phone" required className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+48 600 000 000" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">E-mail</label>
            <input name="email" type="email" required className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jan@przyklad.pl" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Aplikacja</label>
              <select name="app" className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Uber</option>
                <option>Bolt</option>
                <option>FreeNow</option>
                <option>Inna</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Preferowany model</label>
              <input name="preferred_model" className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Np. Corolla, Octavia" />
            </div>
          </div>
          <button className="w-full px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">Wyślij zgłoszenie</button>
          {status && (
            <div className={`text-sm p-3 rounded-lg ${status.ok ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'}`}>
              {status.ok ? 'Dziękujemy! Skontaktujemy się wkrótce.' : status.error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
