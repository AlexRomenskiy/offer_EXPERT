import React, { useState, useRef, useEffect } from 'react';
import CustomSlider from '../components/CustomSlider';
import clsx from 'clsx';

// Niche Data from the provided required code
const nicheData = {
  coaching: { dmToSaleRate: 0.15, tripwireToFlagship: 0.25, suggestedTripwire: 37, suggestedFlagship: 297, source: "LeadResponse 2026", insight: "Instagram Direct: 90% відкривають, 15% купують." },
  fitness: { dmToSaleRate: 0.18, tripwireToFlagship: 0.28, suggestedTripwire: 27, suggestedFlagship: 197, source: "Unkoa Instagram 2025", insight: "Фітнес-ніша: 60% відповідають на DM." },
  education: { dmToSaleRate: 0.12, tripwireToFlagship: 0.22, suggestedTripwire: 27, suggestedFlagship: 247, source: "Creatorflow 2026", insight: "Освітні продукти: 12% конверсія." },
  beauty: { dmToSaleRate: 0.14, tripwireToFlagship: 0.20, suggestedTripwire: 17, suggestedFlagship: 147, source: "Napolify 2025", insight: "76% клієнтів знаходять б'юті-майстрів через IG." },
  handmade: { dmToSaleRate: 0.10, tripwireToFlagship: 0.18, suggestedTripwire: 15, suggestedFlagship: 97, source: "Etsy Statistics 2026", insight: "Персоналізовані товари: 10% конверсія." },
  consulting: { dmToSaleRate: 0.12, tripwireToFlagship: 0.30, suggestedTripwire: 47, suggestedFlagship: 497, source: "Creatorflow 2026", insight: "Експерти: 12% конверсія, високий чек." },
  other: { dmToSaleRate: 0.10, tripwireToFlagship: 0.20, suggestedTripwire: 27, suggestedFlagship: 197, source: "ManyChat 2026", insight: "Стандартна Telegram воронка." },
};

const nicheLabels = {
  coaching: "Коучинг", fitness: "Фітнес", education: "Освіта", beauty: "Б'юті", handmade: "Хендмейд", consulting: "Консалтинг", other: "Інше",
};

const packageData = {
  1: { name: "Один продукт", investment: 495, support: 150, platforms: 45, description: "Один флагманський продукт з автоматизованою воронкою", hasSecondProduct: false },
  2: { name: "Два продукти", investment: 990, support: 250, platforms: 45, description: "Tripwire + Флагман — повна продуктова лінійка", hasSecondProduct: true },
};

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const start = previousValue.current;
    const end = value;
    if (start === end) return;
    
    const duration = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);
      setDisplayValue(current);

      if (progress < 1) requestAnimationFrame(animate);
      else previousValue.current = value;
    };
    requestAnimationFrame(animate);
  }, [value]);

  const formatted = Math.abs(displayValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return <span>{prefix}{formatted}{suffix}</span>;
}

export default function Calculator() {
  const [mode, setMode] = useState("manual");
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [products, setProducts] = useState([{ id: 1, price: 197, sales: 5, type: "flagship" }]);
  const [includeSupport, setIncludeSupport] = useState(true);

  // Helper mode state
  const [followers, setFollowers] = useState(5000);
  const [messages, setMessages] = useState(50);
  const [niche, setNiche] = useState("coaching");
  const [desiredIncome, setDesiredIncome] = useState(2000);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const calculateRecommendations = () => {
    const nicheInfo = nicheData[niche];
    const { dmToSaleRate, tripwireToFlagship, suggestedTripwire, suggestedFlagship } = nicheInfo;
    const warmLeads = Math.round(messages * 0.7);
    const flagshipOnlySales = Math.max(1, Math.round(warmLeads * dmToSaleRate));
    
    const tripwireSales = Math.max(1, Math.round(warmLeads * dmToSaleRate));
    const flagshipFromTripwire = Math.max(1, Math.round(tripwireSales * tripwireToFlagship));
    
    const package1Income = flagshipOnlySales * suggestedFlagship;
    
    let recommendedPackage;
    let tripwirePrice = suggestedTripwire;
    let flagshipPrice = suggestedFlagship;
    let finalTripwireSales = tripwireSales;
    let finalFlagshipSales = flagshipOnlySales;
    let expectedIncome;
    
    if (desiredIncome <= package1Income * 1.1) {
      recommendedPackage = 1;
      const neededPrice = Math.round(desiredIncome / Math.max(1, flagshipOnlySales));
      flagshipPrice = Math.max(100, Math.min(1000, neededPrice));
      expectedIncome = finalFlagshipSales * flagshipPrice;
    } else {
      recommendedPackage = 2;
      finalTripwireSales = tripwireSales;
      finalFlagshipSales = flagshipFromTripwire;
      
      const targetFromTripwire = desiredIncome * 0.25;
      const targetFromFlagship = desiredIncome * 0.75;
      
      tripwirePrice = Math.max(10, Math.min(99, Math.round(targetFromTripwire / Math.max(1, finalTripwireSales))));
      flagshipPrice = Math.max(150, Math.min(1500, Math.round(targetFromFlagship / Math.max(1, finalFlagshipSales))));
      
      expectedIncome = (finalTripwireSales * tripwirePrice) + (finalFlagshipSales * flagshipPrice);
    }
    
    return {
      package: recommendedPackage,
      tripwirePrice, tripwireSales: finalTripwireSales,
      flagshipPrice, flagshipSales: finalFlagshipSales,
      expectedIncome,
      insight: nicheInfo.insight
    };
  };

  const handleCalculateHelper = () => {
    const rec = calculateRecommendations();
    setRecommendation(rec);
    setShowRecommendation(true);
  };

  const applyRecommendations = () => {
    if (!recommendation) return;
    setSelectedPackage(recommendation.package);
    if (recommendation.package === 1) {
      setProducts([{ id: 1, price: recommendation.flagshipPrice, sales: recommendation.flagshipSales, type: "flagship" }]);
    } else {
      setProducts([
        { id: 1, price: recommendation.tripwirePrice, sales: recommendation.tripwireSales, type: "tripwire" },
        { id: 2, price: recommendation.flagshipPrice, sales: recommendation.flagshipSales, type: "flagship" }
      ]);
    }
    setShowRecommendation(false);
    setMode("manual");
  };

  const handlePackageChange = (pkg) => {
    setSelectedPackage(pkg);
    if (pkg === 1) {
      const flagship = products.find(p => p.type === "flagship") || { id: 1, price: 197, sales: 5, type: "flagship" };
      setProducts([{ ...flagship, id: 1 }]);
    } else {
      if (products.length === 1) {
        const flagship = products[0];
        setProducts([
          { id: 1, price: 27, sales: 15, type: "tripwire" },
          { id: 2, price: flagship.price, sales: Math.max(1, Math.round(flagship.sales * 0.25)), type: "flagship" }
        ]);
      }
    }
  };

  const updateProduct = (id, field, value) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const monthlyRevenue = products.reduce((sum, p) => sum + p.price * p.sales, 0);
  const pkg = packageData[selectedPackage];
  const monthlyCosts = (includeSupport ? pkg.support : 0) + pkg.platforms;
  const netProfit = monthlyRevenue - monthlyCosts;
  const investment = pkg.investment;
  const paybackDays = netProfit > 0 ? Math.round((investment / netProfit) * 30) : null;
  const isProfitable = netProfit > 0;

  return (
    <div className="max-w-5xl mx-auto p-8 animate-in-view">
      
      <div className="text-center mb-10 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Калькулятор Окупності (ROI)
        </h1>
        <p className="text-slate-500 font-medium max-w-xl mx-auto">
          Спрогнозуйте свій дохід та дізнайтеся, як швидко окупляться інвестиції в автоворонку.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setMode("manual")}
            className={clsx(
              "px-5 py-2 text-sm font-semibold rounded-lg transition-all",
              mode === "manual" ? "bg-indigo-50 text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
            )}
          >
            Ввести свої дані
          </button>
          <button
            onClick={() => { setMode("helper"); setShowRecommendation(false); }}
            className={clsx(
              "px-5 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2",
              mode === "helper" ? "bg-indigo-50 text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
            )}
          >
            <iconify-icon icon="solar:lightbulb-bolt-linear" width="16"></iconify-icon>
            Допоможіть розрахувати
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {mode === "helper" ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <iconify-icon icon="solar:magic-stick-3-linear" className="text-indigo-500 text-xl"></iconify-icon>
                Майстер розрахунку
              </h3>
              
              {!showRecommendation ? (
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-700 block">Ваша ніша</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(nicheLabels).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setNiche(key)}
                          className={clsx(
                            "py-2.5 px-4 rounded-xl border text-sm font-medium transition-all text-center",
                            niche === key 
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-500/20" 
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-slate-700">Охоплення Stories (перегляди)</label>
                        <span className="text-sm font-bold text-indigo-600">{followers.toLocaleString()}</span>
                      </div>
                      <CustomSlider value={followers} onChange={setFollowers} min={100} max={20000} step={100} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-slate-700">Вхідних повідомлень (Direct/міс)</label>
                        <span className="text-sm font-bold text-indigo-600">{messages}</span>
                      </div>
                      <CustomSlider value={messages} onChange={setMessages} min={10} max={1000} step={10} />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-semibold text-slate-700">Бажаний дохід ($/міс)</label>
                        <span className="text-sm font-bold text-emerald-600">${desiredIncome.toLocaleString()}</span>
                      </div>
                      <CustomSlider value={desiredIncome} onChange={setDesiredIncome} min={500} max={20000} step={500} />
                    </div>
                  </div>

                  <button 
                    onClick={handleCalculateHelper}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                  >
                    <iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
                    Отримати прогноз
                  </button>
                </div>
              ) : (
                <div className="space-y-6 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 animate-in-view">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">
                      <iconify-icon icon="solar:graph-up-linear" width="22"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Прогноз на основі ринку</h4>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{recommendation.insight}</p>
                      
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-6">
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                          <span className="text-slate-500 font-medium">Рекомендований пакет</span>
                          <span className="font-bold text-slate-800">{packageData[recommendation.package].name}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                          <span className="text-slate-500 font-medium">Прогнозований дохід</span>
                          <span className="font-bold text-emerald-600">${recommendation.expectedIncome.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-slate-400 font-medium pt-1">
                          Ціни оптимізовано для досягнення цілі в ${desiredIncome}.
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          onClick={applyRecommendations}
                          className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-sm transition-all active:scale-[0.98]"
                        >
                          Застосувати дані
                        </button>
                        <button 
                          onClick={() => setShowRecommendation(false)}
                          className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold transition-all"
                        >
                          Назад
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Package Selector */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Вибір пакету</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map(num => (
                    <div 
                      key={num}
                      onClick={() => handlePackageChange(num)}
                      className={clsx(
                        "p-4 rounded-xl border-2 cursor-pointer transition-all relative overflow-hidden",
                        selectedPackage === num 
                          ? "border-indigo-500 bg-indigo-50/30" 
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      {selectedPackage === num && (
                        <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500 rounded-bl-xl flex items-center justify-center">
                          <iconify-icon icon="solar:check-read-linear" className="text-white"></iconify-icon>
                        </div>
                      )}
                      <div className="font-bold text-slate-900 mb-1">{packageData[num].name}</div>
                      <div className="text-xs text-slate-500 mb-3">{packageData[num].description}</div>
                      <div className="font-mono font-bold text-indigo-700 text-lg">${packageData[num].investment} <span className="text-xs text-slate-400 font-sans">разово</span></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Inputs */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-8">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Продажі та Ціни</h3>
                
                {products.map((product) => (
                  <div key={product.id} className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-6">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
                      {product.type === "tripwire" ? <iconify-icon icon="solar:star-fall-linear" className="text-amber-500"></iconify-icon> : <iconify-icon icon="solar:crown-star-linear" className="text-indigo-500"></iconify-icon>}
                      {product.type === "tripwire" ? "Tripwire (Недорогий продукт)" : "Флагман (Основний продукт)"}
                    </div>
                    
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-semibold text-slate-700">Вартість ($)</label>
                          <span className="text-sm font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">${product.price}</span>
                        </div>
                        <CustomSlider 
                          value={product.price} 
                          onChange={(v) => updateProduct(product.id, "price", v)} 
                          min={product.type === "tripwire" ? 5 : 50} 
                          max={product.type === "tripwire" ? 100 : 2000} 
                          step={product.type === "tripwire" ? 1 : 10} 
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-semibold text-slate-700">Продажів на місяць</label>
                          <span className="text-sm font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">{product.sales} шт.</span>
                        </div>
                        <CustomSlider 
                          value={product.sales} 
                          onChange={(v) => updateProduct(product.id, "sales", v)} 
                          min={1} max={100} step={1} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monthly Costs Override */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Технічна підтримка</h3>
                  <p className="text-xs text-slate-500 mt-1">Оновлення, моніторинг та правки (${pkg.support}/міс)</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={includeSupport} onChange={(e) => setIncludeSupport(e.target.checked)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

            </div>
          )}
        </div>

        {/* Right Column: Results sticky */}
        <div className="lg:col-span-5">
          <div className="sticky top-8 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">Фінансовий результат</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Дохід на місяць</span>
                  <span className="font-mono text-lg font-semibold"><AnimatedNumber value={monthlyRevenue} prefix="$" /></span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Витрати на місяць</span>
                  <span className="font-mono text-lg font-semibold text-rose-400">-<AnimatedNumber value={monthlyCosts} prefix="$" /></span>
                </div>
                <div className="h-px bg-slate-700 w-full my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-200">Чистий прибуток</span>
                  <span className={clsx("font-mono text-3xl font-bold tracking-tight", isProfitable ? "text-emerald-400" : "text-rose-400")}>
                    <AnimatedNumber value={netProfit} prefix="$" />
                  </span>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 border border-slate-700/50">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Окупність інвестицій (${investment})</div>
                
                {isProfitable ? (
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-white tracking-tight"><AnimatedNumber value={paybackDays} /></span>
                    <span className="text-slate-400 font-medium mb-1">днів</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                    <iconify-icon icon="solar:danger-triangle-linear" width="18"></iconify-icon>
                    Поточна модель збиткова
                  </div>
                )}
                
                {isProfitable && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50 text-sm">
                    <span className="text-slate-400">Річний прогноз: </span>
                    <span className="font-bold text-emerald-400 ml-1">+${((netProfit * 12) - investment).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Advice Alert */}
            {!isProfitable && (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:info-circle-linear" className="text-rose-500 text-xl mt-0.5 flex-shrink-0"></iconify-icon>
                  <div>
                    <h4 className="font-bold text-rose-900 mb-1">Як вийти в плюс?</h4>
                    <p className="text-sm text-rose-700 leading-relaxed mb-3">
                      Ваших продажів недостатньо для покриття щомісячних витрат (${monthlyCosts}).
                    </p>
                    <ul className="text-sm text-rose-800 space-y-2 list-disc pl-4 font-medium">
                      <li>Збільшіть ціну хоча б одного продукту</li>
                      <li>Залучіть більше трафіку для збільшення продажів</li>
                      {includeSupport && <li>Вимкніть тех. підтримку (економія ${pkg.support}/міс)</li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {isProfitable && mode === "manual" && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">Відмінний результат</h4>
                  <p className="text-sm text-emerald-700">Модель виглядає життєздатною та прибутковою.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}