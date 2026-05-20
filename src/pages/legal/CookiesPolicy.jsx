import { Link } from 'react-router-dom';
import LegalLayout from '../../components/legal/LegalLayout';
import LegalSection from '../../components/legal/LegalSection';
import { reopenCookiePreferences } from '../../components/CookieConsentBanner';
import { legalMeta } from '../../data/legal-meta';

const tocItems = [
  { id: 'what-are-cookies', label: 'Що таке cookies' },
  { id: 'categories', label: 'Категорії cookies, які ми використовуємо' },
  { id: 'specific-cookies', label: 'Конкретні cookies та їх термін' },
  { id: 'third-party', label: 'Сторонні cookies' },
  { id: 'manage', label: 'Як керувати cookies' },
  { id: 'do-not-track', label: 'Do Not Track та Global Privacy Control' },
  { id: 'changes', label: 'Зміни' },
  { id: 'contact', label: 'Контакт' },
];

export default function CookiesPolicy() {
  const { contactEmail, policies } = legalMeta;

  return (
    <LegalLayout
      title="Політика щодо cookies"
      eyebrow="Cookies · GDPR Art. 7 · ePrivacy"
      effective={policies.cookies.effective}
      version={policies.cookies.version}
      tocItems={tocItems}
    >
      <p>
        Ця сторінка пояснює, які cookies та аналогічні технології ми використовуємо на сайті,
        для чого вони потрібні, і як ти можеш керувати своїм вибором. Її слід читати разом із
        нашою <Link to="/privacy">Політикою конфіденційності</Link>.
      </p>

      <div className="legal-callout">
        <p>
          <strong>Хочеш одразу змінити налаштування?</strong>{' '}
          <button
            type="button"
            onClick={reopenCookiePreferences}
            className="text-[#175ae8] underline hover:no-underline"
          >
            Відкрити панель cookies →
          </button>
        </p>
      </div>

      <LegalSection id="what-are-cookies" title="1. Що таке cookies">
        <p>
          <strong>Cookies</strong> — це невеликі текстові файли, які сайт зберігає у твоєму
          браузері, коли ти його відвідуєш. Вони дозволяють сайту запам’ятати тебе при
          наступному візиті, зберігати твої налаштування, рахувати відвідуваність і робити
          інші речі, що покращують досвід користування.
        </p>
        <p>
          На цьому сайті ми також використовуємо{' '}
          <strong>аналогічні технології</strong>: <code>localStorage</code> (для запам’ятовування
          твого вибору щодо cookies), <code>sessionStorage</code> (для тимчасових даних у межах
          візиту), а також <strong>tracking pixels</strong> (для маркетингових цілей, лише за
          твоєю згодою).
        </p>
      </LegalSection>

      <LegalSection id="categories" title="2. Категорії cookies, які ми використовуємо">
        <p>
          Ми ділимо cookies на 4 категорії. <strong>Тільки «Необхідні»</strong> вмикаються
          автоматично — для решти потрібна твоя явна згода.
        </p>

        <p><strong>2.1. Необхідні (Necessary) — завжди активні</strong></p>
        <p>
          Без них сайт не може коректно працювати. Вони не вимагають згоди (підстава —{' '}
          <em>законний інтерес</em>, ст. 6(1)(f) GDPR), оскільки без них неможливо надати
          послугу, яку ти явно запросив.
        </p>
        <ul>
          <li>Збереження твого вибору щодо cookies (інакше ми б питали тебе при кожному візиті).</li>
          <li>Технічні cookies безпеки та запобігання шахрайству.</li>
          <li>Балансування навантаження на сервер.</li>
        </ul>

        <p><strong>2.2. Функціональні (Functional) — з твоєї згоди</strong></p>
        <p>
          Запам’ятовують твої вподобання, щоб сайт працював зручніше:
        </p>
        <ul>
          <li>Збережені поля форм заявки.</li>
          <li>Обрана мова (актуально після запуску EN-версії).</li>
          <li>Стан інтерфейсу (відкритий/закритий FAQ, обраний пакет на сторінці тарифів).</li>
        </ul>

        <p><strong>2.3. Аналітика (Analytics) — з твоєї згоди</strong></p>
        <p>
          Анонімна статистика того, як люди користуються сайтом. Допомагають нам зрозуміти, що
          працює, а що ні, і робити сайт кращим. Аналітичні cookies <em>не ідентифікують</em>{' '}
          тебе особисто.
        </p>
        <ul>
          <li>Кількість відвідувань, унікальні відвідувачі.</li>
          <li>Які сторінки переглядали, скільки часу провели.</li>
          <li>Звідки прийшли (referrer).</li>
          <li>Тип пристрою (мобільний/десктоп).</li>
        </ul>

        <p><strong>2.4. Маркетинг (Marketing) — з твоєї згоди</strong></p>
        <p>
          Дозволяють показувати тобі більш релевантну рекламу на інших сайтах (ретаргетинг) та
          вимірювати ефективність рекламних кампаній.
        </p>
        <ul>
          <li>Pixel Meta (Facebook/Instagram ads).</li>
          <li>Google Ads conversion tracking.</li>
          <li>Інші рекламні tracking-пікселі за необхідності.</li>
        </ul>
        <p>
          Якщо ти не дав згоди — ми не встановлюємо жодних маркетингових cookies.
        </p>
      </LegalSection>

      <LegalSection id="specific-cookies" title="3. Конкретні cookies та їх термін">
        <p>
          Нижче — детальний перелік. Ми оновлюємо його при додаванні нових інструментів.
        </p>

        <p><strong>Категорія: Необхідні</strong></p>
        <ul>
          <li>
            <code>craftlions_cookie_consent_v1</code> (<em>localStorage</em>) — зберігає твій
            вибір щодо cookies. <strong>Термін:</strong> до видалення тобою або скидання
            налаштувань браузера. <strong>Постачальник:</strong> ми.
          </li>
        </ul>

        <p><strong>Категорія: Функціональні</strong></p>
        <p>
          Наразі не встановлюються — додамо при появі функціонала, який їх потребуватиме.
        </p>

        <p><strong>Категорія: Аналітика</strong></p>
        <ul>
          <li>
            <strong>Vercel Web Analytics</strong> — анонімна статистика відвідувань.{' '}
            <strong>Не використовує cookies</strong> — застосовує безкукові анонімні beacons,
            не зберігає IP-адреси, не використовує fingerprinting.{' '}
            <strong>Постачальник:</strong> Vercel Inc.
          </li>
          <li>
            <strong>Vercel Speed Insights</strong> — анонімні метрики продуктивності
            (Core Web Vitals: LCP, CLS, INP). <strong>Не використовує cookies.</strong>{' '}
            <strong>Постачальник:</strong> Vercel Inc.
          </li>
        </ul>

        <p><strong>Категорія: Маркетинг</strong></p>
        <ul>
          <li>
            <span className="legal-placeholder">[TODO: Meta Pixel — _fbp, fr — додати після запуску трафіку]</span>
          </li>
          <li>
            <span className="legal-placeholder">[TODO: Google Ads — _gcl_au — додати після запуску]</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="third-party" title="4. Сторонні cookies">
        <p>
          Деякі cookies встановлюються не нами, а третіми сторонами, послугами яких ми
          користуємось:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — хостинг і CDN. Може встановлювати службові cookies для
            балансування навантаження.{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy policy Vercel
            </a>
            .
          </li>
          <li>
            <strong>YouTube</strong> (якщо embedded відео): використовуємо{' '}
            <code>youtube-nocookie.com</code> — privacy-enhanced варіант, який <em>не</em>{' '}
            ставить cookies до моменту, поки ти не натиснеш play.
          </li>
          <li>
            <span className="legal-placeholder">[TODO: додати Meta / Google Ads після запуску трафіку]</span>
          </li>
        </ul>
        <p>
          Ми не контролюємо cookies третіх сторін напряму. Для управління ними переглянь
          політики відповідних компаній або налаштування у твоєму браузері.
        </p>
      </LegalSection>

      <LegalSection id="manage" title="5. Як керувати cookies">
        <p>У тебе є кілька способів керувати cookies:</p>

        <p><strong>5.1. На нашому сайті</strong></p>
        <ul>
          <li>
            <strong>Банер при першому візиті</strong> — обери «Прийняти всі», «Тільки необхідні»
            або «Налаштувати» для детального контролю.
          </li>
          <li>
            <strong>Перенастроїти будь-коли:</strong>{' '}
            <button
              type="button"
              onClick={reopenCookiePreferences}
              className="text-[#175ae8] underline hover:no-underline"
            >
              відкрити панель cookies
            </button>
            . Також посилання «Налаштування cookies» є у футері кожної сторінки.
          </li>
        </ul>

        <p><strong>5.2. У браузері</strong></p>
        <p>
          Більшість браузерів дозволяють заблокувати cookies повністю або видалити вже
          збережені. Інструкції:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari (macOS)</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>
          </li>
        </ul>
        <p>
          <strong>Зверни увагу:</strong> якщо заблокуєш всі cookies, частина функціонала сайту
          може працювати некоректно (наприклад, форми не будуть зберігати введені дані між
          сторінками).
        </p>
      </LegalSection>

      <LegalSection id="do-not-track" title="6. Do Not Track та Global Privacy Control">
        <p>
          <strong>Do Not Track (DNT)</strong> — застарілий стандарт, який ми наразі не
          обробляємо як сигнал згоди, оскільки індустрія не дійшла єдиного розуміння його
          інтерпретації.
        </p>
        <p>
          <strong>Global Privacy Control (GPC)</strong> — сучасний сигнал від браузера, що
          означає «не продавай і не шейр мої дані». Ми <strong>поважаємо</strong> цей сигнал —
          якщо твій браузер його надсилає, ми автоматично трактуємо це як відмову від cookies
          категорій «Аналітика» та «Маркетинг».
        </p>
      </LegalSection>

      <LegalSection id="changes" title="7. Зміни в цій політиці">
        <p>
          Ми оновлюємо цю політику при додаванні нових інструментів аналітики/маркетингу або
          зміні законодавства. Дата останнього оновлення — на початку сторінки. При істотних
          змінах твоя згода скидається, і банер з’явиться знову — щоб ти переглянув/-ла нові
          умови.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. Контакт">
        <p>
          Питання щодо cookies: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
