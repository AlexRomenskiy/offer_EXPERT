import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Instagram (EN)', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.pro/' },
  { label: 'Instagram (UA)', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.ua/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const scrollToFinal = (e) => {
    e.preventDefault();
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="w-full scroll-mt-24" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Photo */}
        <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
          <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-24">
            <div
              className="relative aspect-[4/5] max-h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50/40 border border-slate-200 shadow-xl shadow-slate-200/50"
              aria-label="Фото Олександра"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-300/40">
                  <span className="text-white font-semibold text-4xl tracking-wider">AR</span>
                </div>
                <p className="text-xs font-light text-slate-400 uppercase tracking-widest mt-2">
                  Фото буде додано
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 order-1 lg:order-2 reveal-on-scroll space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:stars-linear" width="14" height="14" className="text-orange-500" />
              <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">Про мене</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-3 leading-[1.1]">
              Олександр Роменський
            </h2>

            <p className="text-base text-slate-500 font-normal leading-relaxed">
              7 років збираю воронки продажів. AI робить це точніше і швидше.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:calendar-linear" width="16" height="16" className="text-orange-500" />
              <span className="font-semibold text-slate-900">7+ років</span>
              <span className="text-slate-500 font-normal">у воронках продажів</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:global-linear" width="16" height="16" className="text-orange-500" />
              <span className="font-semibold text-slate-900">5 країн</span>
              <span className="text-slate-500 font-normal">UA · US · CA · EG · GE</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:users-group-rounded-linear" width="16" height="16" className="text-orange-500" />
              <span className="text-slate-700 font-normal">Коучи · B2B · e-commerce</span>
            </span>
          </div>

          <div className="space-y-5 text-base text-slate-600 font-normal leading-relaxed max-w-2xl border-l-2 border-orange-200 pl-6">
            <p>
              <span className="text-slate-900 font-medium">За освітою — актор театру.</span> Сцена цікавила мене менше, ніж режисура: розкладати мотивацію, відчувати аудиторію, бачити, що людині насправді потрібно. У маркетингу ці навички працюють як ніде.
            </p>
            <p>
              Збираю воронки продажів — <span className="text-slate-900 font-medium">вебінарні, лід-магнітні, під високий чек</span>. Лендинги, копірайтинг, таргет, чат-боти — це інструменти всередині. AI у мене не замість досвіду, а його <span className="text-slate-900 font-medium">підсилювач</span>: робить кожен крок швидше і точніше.
            </p>
            <p>
              Багато сильних експертів застрягають не на експертизі, а на упаковці. Знання є, аудиторія є — а системи, яка з'єднує з людьми, що чекають саме на них, нема. <span className="text-slate-900 font-medium">Будую цей міст.</span>
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Більше про мене</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50 flex items-center justify-center text-slate-500 hover:text-orange-600 transition-all shadow-sm"
                >
                  <iconify-icon icon={link.icon} width="16" height="16" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#final-cta"
            onClick={scrollToFinal}
            className="group flex items-center justify-between gap-4 bg-white border border-slate-200 hover:border-orange-300 rounded-2xl p-5 lg:p-6 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col gap-1">
              <span className="text-base lg:text-lg font-medium text-slate-900 tracking-tight">Поговоримо напряму</span>
              <span className="text-sm text-slate-500 font-light">Розберемо твою ситуацію за 30 хв — безкоштовно.</span>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900 group-hover:bg-orange-500 text-white px-5 py-3 rounded-xl font-medium text-sm shadow-md transition-all">
              <span className="hidden sm:inline">Записатись на розбір</span>
              <span className="sm:hidden">Записатись</span>
              <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
