import { useEffect, useState } from 'react'

function FAQ() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/faq`).then(r => r.json()).then(setItems).catch(() => {})
  }, [])

  return (
    <section className="py-16 bg-slate-950" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl bg-white/[0.04] border border-white/10">
          {items.map((q, i) => (
            <details key={i} className="group">
              <summary className="list-none cursor-pointer p-5 text-white flex items-center justify-between">
                <span className="font-medium">{q.question}</span>
                <span className="ml-4 text-emerald-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm">{q.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
