import React, { useRef } from 'react'
import useReveal from '../hooks/useReveal'

const plans = [
  {
    name: 'Team',
    price: '$0',
    period: '/mo',
    desc: 'Perfect for small teams getting started with observability.',
    features: ['Up to 5 users', '100GB data ingestion', 'Standard dashboards'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/user/mo',
    desc: 'Advanced features for growing engineering organizations.',
    features: ['Unlimited users', '5TB data ingestion', 'AI Root Cause Analysis'],
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Custom scale, compliance, and dedicated support for large orgs.',
    features: ['Custom data limits', 'Advanced RBAC', 'Custom Integrations'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-32" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-4">Transparent Pricing</h2>
        <p className="text-lg text-slate-500 font-light">Start for free. Scale as your infrastructure grows.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`glass-panel p-10 rounded-[2rem] reveal-on-scroll flex flex-col ${
              plan.highlight
                ? 'bg-white/70 border-blue-200 shadow-xl relative overflow-hidden'
                : 'border border-white/60'
            }`}
          >
            {plan.highlight && (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"></div>
                <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">{plan.badge}</div>
              </>
            )}
            <h3 className="text-xl font-medium text-slate-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-slate-900">{plan.price}</span>
              {plan.period && <span className="text-slate-500">{plan.period}</span>}
            </div>
            <p className="text-sm text-slate-500 mb-8 font-light">{plan.desc}</p>
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" class="text-blue-500"></iconify-icon>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                plan.highlight
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                  : 'border border-slate-300 text-slate-700 hover:bg-white/50'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}