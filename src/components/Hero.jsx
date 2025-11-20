import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs mb-4">
            Flota dla kierowców Uber / Bolt / FreeNow
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Jeździsz Uberem lub Boltem? Wskakuj do moviQ.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Samochód pod klucz. Zero formalności. Jasne zasady.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors">
              Zgłoś się
            </a>
            <a href="#fleet" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold backdrop-blur border border-white/20 hover:bg-white/20 transition-colors">
              Zobacz flotę
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
