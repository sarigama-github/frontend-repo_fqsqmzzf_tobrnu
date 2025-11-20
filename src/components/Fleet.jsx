import { useEffect, useState } from 'react'

function Fleet() {
  const [cars, setCars] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/vehicles`).then(r => r.json()).then(setCars).catch(() => {})
  }, [])

  return (
    <section className="py-16 bg-slate-950" id="fleet">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Flota – dostępne modele</h2>
        <p className="text-slate-300 mb-10">Sprawdzone, ekonomiczne auta do pracy w aplikacjach.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
              <div className="aspect-video bg-slate-800">
                {c.photo_url && <img src={c.photo_url} alt={`${c.make} ${c.model}`} className="w-full h-full object-cover" />}
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{c.make} {c.model}</h3>
                <p className="text-slate-400 text-sm capitalize">{c.fuel}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-white text-xl font-bold">{c.price_monthly} zł/mies</div>
                  <a href="#contact" className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors">Zapytaj o dostępność</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
