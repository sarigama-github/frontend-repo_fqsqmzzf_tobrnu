import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Fleet from './components/Fleet'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-slate-300">
      <header className="sticky top-0 z-30 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-extrabold tracking-tight text-xl">moviQ</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:text-white">Korzyści</a>
            <a href="#process" className="hover:text-white">Jak to działa</a>
            <a href="#fleet" className="hover:text-white">Flota</a>
            <a href="#pricing" className="hover:text-white">Cennik</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">Zgłoś się</a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Process />
        <Fleet />
        <section className="py-12 bg-slate-950">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Oferta dla kierowców</h2>
              <p className="text-slate-300">Szukasz auta, które nie będzie Twoim problemem? W moviQ dostajesz pełny pakiet serwisowy, opony, auto zastępcze i rozliczenia bez stresu. Ty jeździsz — my dbamy o resztę.</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Oferta dla flot i partnerów</h2>
              <p className="text-slate-300">Współpraca B2B: wynajem długoterminowy, rozliczenia tygodniowe lub miesięczne, auta zastępcze. Jesteśmy otwarci na współpracę z małymi i średnimi firmami.</p>
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-white font-extrabold text-lg">moviQ</div>
            <p className="text-slate-400 mt-2">Auto do Ubera i Bolta bez problemów. Auta od ręki, pełne ubezpieczenie, serwis i wsparcie 7/7.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Kontakt</div>
            <ul className="mt-2 text-slate-400 space-y-1">
              <li>Adres: ul. Przykładowa 1, 00-001 Warszawa</li>
              <li>NIP: 0000000000 • KRS: 000000000 • REGON: 000000000</li>
              <li>Telefon: +48 123 456 789</li>
              <li>Email: hello@moviq.pl</li>
              <li>Godziny pracy: Pon–Ndz 8:00–20:00</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Szybkie linki</div>
            <ul className="mt-2 text-slate-400 space-y-1">
              <li><a href="#fleet" className="hover:text-white">Dostępne auta</a></li>
              <li><a href="#pricing" className="hover:text-white">Cennik</a></li>
              <li><a href="#contact" className="hover:text-white">Zgłoś się</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-slate-500 text-xs mt-8">© {new Date().getFullYear()} moviQ. Wszelkie prawa zastrzeżone.</div>
      </footer>
    </div>
  )
}

export default App
