import { useEffect, useState } from 'react'

function Plan({ name, price_from, includes }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
      <div className="text-white text-xl font-bold">{name}</div>
      <div className="text-3xl text-white mt-2 font-extrabold">od {price_from} zł/mies</div>
      <ul className="mt-4 space-y-2 text-slate-300 text-sm">
        {includes?.map((i, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {i}
          </li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex px-5 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">Wybierz pakiet</a>
    </div>
  )
}

function Pricing() {
  const [plans, setPlans] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/pricing`).then(r => r.json()).then(setPlans).catch(() => {})
  }, [])

  return (
    <section className="py-16 bg-slate-950" id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Cennik / Pakiety</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Plan key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
