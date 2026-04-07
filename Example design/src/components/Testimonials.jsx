import React, { useRef } from 'react'
import useReveal from '../hooks/useReveal'

const testimonials = [
  {
    quote: '"Orion cut our MTTR by 60% in the first month. The AI root cause analysis is like having our best principal engineer on-call 24/7."',
    name: 'Sarah Jenkins',
    role: 'VP Engineering, DataFlow',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    badge: '5.0 Rating',
  },
  {
    quote: '"We replaced three legacy monitoring tools with Orion. The interface is beautiful, but the automated runbooks are the real game changer."',
    name: 'Michael Chang',
    role: 'Director of SRE, Acme Corp',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    badge: 'Enterprise',
  },
  {
    quote: '"Alert fatigue was destroying our team\'s morale. Orion grouped the noise so perfectly that our paging volume dropped immediately."',
    name: 'Elena Rostova',
    role: 'Platform Lead, Sentinel',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    badge: 'Fast Impact',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="max-w-[1400px] mx-auto px-6 pb-32" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white/70 text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-5">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4">
          Loved by engineering leaders
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed font-light">
          Teams rely on Orion to reduce noise, accelerate incident response, and bring clarity to complex operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-panel p-8 rounded-[2rem] reveal-on-scroll flex flex-col justify-between min-h-[320px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.1)] transition-all duration-500"
          >
            <div>
              <div className="flex items-center justify-between mb-7">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <iconify-icon key={j} icon="solar:star-bold" width="18" height="18"></iconify-icon>
                  ))}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{t.badge}</div>
              </div>
              <p className="text-slate-700 text-[17px] leading-8 font-light mb-10">{t.quote}</p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/70">
              <img
                src={t.img}
                alt={`Portrait of ${t.name}`}
                className="w-14 h-14 rounded-full object-cover border border-white shadow-sm"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}