import { Shield, Wrench, Clock, LifeBuoy, Car, Gauge } from 'lucide-react'

const items = [
  { icon: Clock, title: 'Auto gotowe w 24h', desc: 'Szybki start bez zbędnych formalności' },
  { icon: Wrench, title: 'Serwis w cenie', desc: 'Serwis, opony i assistance 24/7' },
  { icon: Shield, title: 'Pełne ubezpieczenie', desc: 'OC/AC/NNW + auto zastępcze' },
  { icon: Gauge, title: 'Bez limitu km', desc: 'Jeździsz ile chcesz — rozliczenie proste' },
  { icon: Car, title: 'Ekonomiczne i hybrydy', desc: 'Sprawdzone modele dla TNC' },
  { icon: LifeBuoy, title: 'Wsparcie 7/7', desc: 'Pomagamy, kiedy tylko potrzebujesz' },
]

function Benefits() {
  return (
    <section className="py-16 bg-slate-950" id="benefits">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Dlaczego moviQ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors">
              <Icon className="w-8 h-8 text-emerald-400" />
              <h3 className="text-white font-semibold text-lg mt-4">{title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
