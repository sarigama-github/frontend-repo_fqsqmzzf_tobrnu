import { MousePointerClick, FileSignature, KeyRound } from 'lucide-react'

function Step({ icon: Icon, title, desc, number }) {
  return (
    <div className="relative p-6 rounded-xl bg-white/[0.04] border border-white/10">
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-lg shadow-emerald-500/30">{number}</div>
      <Icon className="w-8 h-8 text-emerald-400" />
      <h3 className="text-white font-semibold text-lg mt-4">{title}</h3>
      <p className="text-slate-300 mt-1 text-sm">{desc}</p>
    </div>
  )
}

function Process() {
  return (
    <section className="py-16 bg-slate-950" id="process">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Jak to działa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step number={1} icon={MousePointerClick} title="Wybierasz auto" desc="Kontaktujesz się z nami — dobieramy model i pakiet." />
          <Step number={2} icon={FileSignature} title="Podpis online" desc="Zero papierów, wszystko cyfrowo." />
          <Step number={3} icon={KeyRound} title="Odbierasz i jedziesz" desc="Wskakujesz do auta i zarabiasz na Uber/Bolt/FreeNow." />
        </div>
      </div>
    </section>
  )
}

export default Process
