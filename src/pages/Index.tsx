import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const PHOTO = 'https://cdn.poehali.dev/projects/80f7150f-7b8b-496c-a3db-facfce5422ae/files/864ba99b-0a38-49a8-a943-85704a4121a4.jpg';

const requests = [
  { c: '#D97A5B', t: 'Тревога, которая не отпускает' },
  { c: '#E8B4B8', t: 'Панические атаки' },
  { c: '#8DA98E', t: 'Мышечное напряжение и зажимы' },
  { c: '#C9D9DE', t: 'Когда «просто подыши» уже не помогает' },
  { c: '#D97A5B', t: 'Навязчивые мысли и тревога о здоровье' },
];

const steps = [
  { n: '01', icon: 'MessageCircleHeart', t: 'Знакомимся', d: 'Вы рассказываете, что происходит. Без оценок и «правильных» ответов — просто честный разговор.' },
  { n: '02', icon: 'Wind', t: 'Тушим острое', d: 'Учимся справляться с приступами здесь и сейчас: техники дыхания, заземление, опоры.' },
  { n: '03', icon: 'Sprout', t: 'Работаем в корень', d: 'Разбираемся, откуда растёт тревога — чтобы она не возвращалась, а не просто затихала.' },
];

const reviews = [
  { name: 'Анна, 29 лет', text: 'Пришла с паническими атаками в метро. Через месяц снова спокойно езжу на работу. Это другая жизнь.' },
  { name: 'Дмитрий, 35 лет', text: 'Думал, тревога — это навсегда и со мной что-то не так. Оказалось, из неё правда есть выход.' },
  { name: 'Марина, 41 год', text: 'Очень бережно. Ни разу не почувствовала, что меня торопят или давят. Спасибо за спокойствие.' },
];

const Index = () => {
  const calmRef = useRef<HTMLDivElement>(null);
  const [calmed, setCalmed] = useState(false);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setCalmed(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={calmRef} className={`min-h-screen bg-cream text-ink overflow-x-hidden ${calmed ? 'calmed' : ''}`}>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="font-hand text-3xl text-terra leading-none">Елена Светлова</a>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink/80">
            <a href="#about" className="hover:text-terra transition-colors">Обо мне</a>
            <a href="#work" className="hover:text-terra transition-colors">С чем работаю</a>
            <a href="#how" className="hover:text-terra transition-colors">Как проходит</a>
            <a href="#cta" className="hover:text-terra transition-colors">Канал</a>
            <a href="#cta" className="px-5 py-2.5 rounded-full bg-blush text-white font-bold hover:bg-terra transition-colors">Записаться</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="font-hand text-4xl text-terra mb-2">Здравствуйте,</p>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              я помогаю<br />выйти из<br /><span className="text-terra">тревоги</span>
            </h1>
            <p className="mt-7 text-lg text-ink/75 max-w-md leading-relaxed">
              Давайте честно: когда внутри всё сжато, советы «просто расслабься» только злят.
              Я рядом, чтобы вместе вернуть вам спокойствие и контроль — спокойно, без спешки.
            </p>
            <a href="#cta" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-terra text-white font-bold text-lg shadow-lg shadow-terra/30 hover:scale-[1.03] transition-transform">
              <Icon name="Calendar" size={20} /> Записаться на сессию
            </a>
          </div>

          {/* PHOTO + SHAPES */}
          <div className="relative flex justify-center">
            <div className="absolute -top-6 -left-2 w-40 h-40 bg-sky blob calm-shape animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-4 -right-2 w-32 h-32 bg-blush blob-2 calm-shape animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="absolute -bottom-8 left-10 w-24 h-24 bg-sage blob-3 calm-shape animate-float" style={{ animationDelay: '3s' }} />
            <div className="relative w-72 h-72 md:w-80 md:h-80 bg-blush blob overflow-hidden shadow-2xl shadow-terra/20 animate-breathe-slow">
              <img src={PHOTO} alt="Психолог" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WAVE */}
      <div className="text-sky -mb-1">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64 C320,140 520,0 720,40 C920,80 1120,140 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* СО МНОЙ */}
      <section id="about" className="bg-sky px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/60 rounded-[2rem] p-8">
            <p className="font-hand text-3xl text-terra mb-2">во что я верю</p>
            <h3 className="text-2xl font-extrabold mb-3">Тревога — не навсегда</h3>
            <p className="text-ink/75 leading-relaxed">
              Это не черта характера и не приговор. Это состояние, в котором нервная система перегрелась.
              Из него есть выход — и я знаю дорогу.
            </p>
          </div>
          <div className="bg-white/60 rounded-[2rem] p-8">
            <p className="font-hand text-3xl text-terra mb-2">что я делаю</p>
            <h3 className="text-2xl font-extrabold mb-3">Возвращаю спокойствие</h3>
            <p className="text-ink/75 leading-relaxed">
              Помогаю снова почувствовать почву под ногами и контроль над собой —
              чтобы вы жили, а не выживали между приступами.
            </p>
          </div>
        </div>
      </section>

      {/* С ЧЕМ РАБОТАЮ */}
      <section id="work" className="bg-terra text-white px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="absolute -top-4 left-6 w-28 h-28 bg-white/20 blob-2 animate-breathe" />
            <div className="relative w-64 h-64 md:w-72 md:h-72 bg-cream blob-3 overflow-hidden shadow-xl">
              <img src={PHOTO} alt="Психолог" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="font-hand text-4xl mb-1">вы по адресу, если это про вас</p>
            <h2 className="text-3xl font-black mb-6">С чем я работаю</h2>
            <ul className="space-y-4">
              {requests.map((r) => (
                <li key={r.t} className="flex items-center gap-3 text-lg">
                  <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ background: r.c }} />
                  {r.t}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-white/70">
              17 лет в практике · клинический психолог · КПТ и телесно-ориентированный подход
            </p>
          </div>
        </div>
      </section>

      {/* КАК ПРОХОДИТ */}
      <section id="how" className="bg-cream px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-hand text-4xl text-terra">всё понятно заранее</p>
            <h2 className="text-3xl md:text-4xl font-black">Как проходит работа</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center text-sage mb-5">
                  <Icon name={s.icon} size={26} />
                </div>
                <span className="font-hand text-3xl text-blush">{s.n}</span>
                <h3 className="text-xl font-extrabold mt-1 mb-2">{s.t}</h3>
                <p className="text-ink/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВ */}
      <section className="bg-sage px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl">
            <div className="flex justify-center gap-1 text-terra mb-5">
              {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={22} className="fill-terra" />)}
            </div>
            <p className="text-xl leading-relaxed text-ink/85 min-h-[112px]">«{reviews[review].text}»</p>
            <p className="mt-5 font-bold text-sage">{reviews[review].name}</p>
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReview(i)}
                  className={`h-2.5 rounded-full transition-all ${i === review ? 'w-7 bg-terra' : 'w-2.5 bg-sage/40'}`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ДВОЙНОЙ CTA */}
      <section id="cta" className="relative bg-cream px-6 py-28 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-sky/40 animate-breathe" />
        <div className="absolute bottom-10 right-12 w-40 h-40 rounded-full bg-blush/30 animate-breathe-slow" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-sage/30 animate-float" />
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="font-hand text-4xl text-terra mb-2">выдохните</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Не обязательно<br />решаться сразу</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#cta" className="px-8 py-4 rounded-full bg-terra text-white font-bold text-lg shadow-lg shadow-terra/30 hover:scale-[1.03] transition-transform">
              Записаться на сессию
            </a>
            <a href="#cta" className="px-8 py-4 rounded-full bg-white border-2 border-sage text-sage font-bold text-lg hover:bg-sage hover:text-white transition-colors inline-flex items-center justify-center gap-2">
              <Icon name="Send" size={20} /> Зайти в канал
            </a>
          </div>
          <p className="mt-6 text-ink/60">В канале — как тревога устроена и что с ней делать. Без воды.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream px-6 py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-hand text-4xl text-blush">Елена Светлова</p>
            <p className="text-cream/60 text-sm mt-1">Психолог · помощь при тревоге</p>
          </div>
          <div className="flex gap-4">
            {['Send', 'Instagram', 'Phone', 'Mail'].map((ic) => (
              <a key={ic} href="#cta" className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terra transition-colors">
                <Icon name={ic} size={20} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-cream/40 text-sm mt-10">© 2026 Елена Светлова. Всё будет хорошо.</p>
      </footer>
    </div>
  );
};

export default Index;
