import { Link } from 'react-router-dom';
import LegalLayout from '../../components/legal/LegalLayout';
import LegalSection from '../../components/legal/LegalSection';
import { legalMeta } from '../../data/legal-meta';

const tocItems = [
  { id: 'entity', label: 'Юридична особа' },
  { id: 'addresses', label: 'Контактні канали' },
  { id: 'specialized', label: 'Спеціалізовані запити' },
  { id: 'hours', label: 'Робочі години' },
  { id: 'complaints', label: 'Як подати скаргу' },
  { id: 'regulators', label: 'Наглядові органи' },
];

export default function Contacts() {
  const { entity, contactEmail, legalEmail, dpoEmail, refundEmail, brandName } = legalMeta;

  return (
    <LegalLayout
      title="Контакти та реквізити"
      eyebrow="Contacts · Legal info"
      tocItems={tocItems}
    >
      <p>
        Тут зібрана повна контактна та юридична інформація про {brandName}. Для більшості
        питань пиши на загальний email — ми перенаправимо у потрібному напрямку.
      </p>

      <LegalSection id="entity" title="1. Оператор сайту">
        {entity.registrationStatus === 'pending' && (
          <div className="legal-callout">
            <p>
              <strong>Поточний статус:</strong> сайт {brandName} наразі управляється фізичною
              особою як приватний проект, який готується до офіційної реєстрації бізнесу.
              Усі юридичні документи (Privacy / Terms / Refund) є чинними та обов’язковими для
              виконання — однак повні юридичні реквізити з’являться в цій секції після
              державної реєстрації.
            </p>
          </div>
        )}

        <div className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 backdrop-blur-sm">
          <ul className="list-none p-0 m-0 space-y-2.5">
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Бренд
              </span>
              {brandName}
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Оператор
              </span>
              {entity.publicName}
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Юридична назва (після реєстрації)
              </span>
              <span className="legal-placeholder">{entity.legalName}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Реєстраційний номер
              </span>
              <span className="legal-placeholder">{entity.registrationId}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Юридична адреса
              </span>
              <span className="legal-placeholder">{entity.registeredAddress}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Країна реєстрації
              </span>
              <span className="legal-placeholder">{entity.country}</span>
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="addresses" title="2. Контактні канали">
        <p><strong>Загальний email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
        <p>
          Це універсальний канал — пиши сюди для будь-яких питань. Якщо тема явно стосується
          специфічного напрямку (privacy, legal, refund), використовуй спеціалізовану адресу
          (див. розділ 3) — це прискорює обробку.
        </p>
      </LegalSection>

      <LegalSection id="specialized" title="3. Спеціалізовані запити">
        <p><strong>3.1. Privacy / Data Protection</strong></p>
        <p>
          Запити щодо персональних даних, реалізація прав за GDPR/CCPA, питання обробки:{' '}
          <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a> з темою <strong>«Privacy Request»</strong>.
        </p>
        <p>
          Реакція: до <strong>30 календарних днів</strong> (як того вимагає GDPR Art. 12(3)).
        </p>

        <p><strong>3.2. Legal — договірні та юридичні питання</strong></p>
        <p>
          Питання щодо <Link to="/terms">Умов надання послуг</Link>, доручення від юристів,
          судові повідомлення:{' '}
          <a href={`mailto:${legalEmail}`}>{legalEmail}</a> з темою <strong>«Legal»</strong>.
        </p>

        <p><strong>3.3. Повернення коштів</strong></p>
        <p>
          Запити повернення:{' '}
          <a href={`mailto:${refundEmail}`}>{refundEmail}</a> з темою <strong>«Refund Request»</strong>.
          Деталі процесу — у <Link to="/refund">Refund Policy</Link>.
        </p>
        <p>
          Реакція: до <strong>3 робочих днів</strong>.
        </p>

        <p><strong>3.4. Media / Press</strong></p>
        <p>
          Інтерв’ю, гостьові пости, цитування:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> з темою <strong>«Press»</strong>.
        </p>

        <p><strong>3.5. Партнерство / Колаборації</strong></p>
        <p>
          Пропозиції партнерства, спільних проектів, реферальні програми:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> з темою <strong>«Partnership»</strong>.
        </p>
      </LegalSection>

      <LegalSection id="hours" title="4. Робочі години">
        <p>
          <strong>Понеділок – П’ятниця: 10:00 – 19:00</strong> за київським часом (UTC+2/+3 із
          переходом на літній час).
        </p>
        <p>
          У вихідні та загальновизнані державні свята ми, як правило, не відповідаємо.
          Терміновим заявкам у питаннях безпеки даних — даємо пріоритет незалежно від часу.
        </p>
        <p>
          <strong>Час відповіді</strong> на загальний email — до 24 робочих годин у будній
          день.
        </p>
      </LegalSection>

      <LegalSection id="complaints" title="5. Як подати скаргу або претензію">
        <p>
          Якщо у тебе є скарга на роботу, поведінку команди або порушення з нашого боку:
        </p>
        <ol>
          <li>
            <strong>Спочатку напиши нам</strong> на{' '}
            <a href={`mailto:${legalEmail}`}>{legalEmail}</a> з темою <strong>«Complaint»</strong>.
            Опиши ситуацію, докладай скріншоти/докази. Ми відповідаємо протягом{' '}
            <strong>5 робочих днів</strong>.
          </li>
          <li>
            <strong>Якщо відповідь нас не задовольнила обох</strong> — переходимо до медіації
            (п. 16.2 <Link to="/terms">Terms</Link>).
          </li>
          <li>
            <strong>Якщо медіація не допомогла</strong> — арбітраж за п. 16.3 Terms.
          </li>
          <li>
            <strong>Паралельно</strong> ти завжди можеш звернутись до відповідного наглядового
            органу (див. розділ 6 нижче) — це не обмежує твоїх прав.
          </li>
        </ol>
      </LegalSection>

      <LegalSection id="regulators" title="6. Наглядові органи (зовнішні канали)">
        <p>
          Якщо ти вважаєш, що ми порушили твої права, окрім прямого звернення до нас, ти можеш
          звернутись до незалежних регуляторів:
        </p>

        <p><strong>6.1. Україна</strong></p>
        <ul>
          <li>
            <strong>Уповноважений Верховної Ради України з прав людини</strong> (захист
            персональних даних):{' '}
            <a href="https://www.ombudsman.gov.ua/" target="_blank" rel="noopener noreferrer">ombudsman.gov.ua</a>
          </li>
          <li>
            <strong>Держспоживслужба</strong> (захист прав споживачів):{' '}
            <a href="https://dpss.gov.ua/" target="_blank" rel="noopener noreferrer">dpss.gov.ua</a>
          </li>
        </ul>

        <p><strong>6.2. Європейський Союз</strong></p>
        <ul>
          <li>
            <strong>EDPB (European Data Protection Board)</strong> — список національних регуляторів:{' '}
            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>
          </li>
          <li>
            <strong>Online Dispute Resolution Platform</strong> (для споживачів ЄС):{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>
          </li>
        </ul>

        <p><strong>6.3. Велика Британія</strong></p>
        <ul>
          <li>
            <strong>Information Commissioner’s Office (ICO)</strong>:{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
          </li>
        </ul>

        <p><strong>6.4. США (Каліфорнія)</strong></p>
        <ul>
          <li>
            <strong>California Privacy Protection Agency (CPPA)</strong>:{' '}
            <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer">cppa.ca.gov</a>
          </li>
          <li>
            <strong>California Attorney General</strong> (для CCPA):{' '}
            <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer">oag.ca.gov/privacy/ccpa</a>
          </li>
        </ul>

        <p><strong>6.5. Канада</strong></p>
        <ul>
          <li>
            <strong>Office of the Privacy Commissioner of Canada</strong>:{' '}
            <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">priv.gc.ca</a>
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
