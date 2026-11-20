import React, { useEffect, useState } from 'react';
import { Bell, CalendarDays, Check, Gift, Heart, Menu, PartyPopper, Sparkles, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import { landingCopy } from '../../i18n/landingCopy';
import WishioLogo from './WishioLogo';

const icons = [Bell, Heart, Sparkles, Gift, PartyPopper];
const asset = (name, lang = 'en') => `/screenshots/current/${lang}/${name}.webp`;
const StoreLink = ({ copy }) => <a className="store-link" href={siteConfig.iosAppStoreUrl} target="_blank" rel="noopener noreferrer"><svg width="29" height="29" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.77 3.08.83 1.18-.24 2.31-.96 3.57-.87 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" /></svg><span><small>{copy.store}</small><strong>App Store</strong></span></a>;

export default function Landing() {
  const { language, setLanguage } = useLanguage();
  const locale = language === 'es' ? 'es' : 'en';
  const c = landingCopy[locale];
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const panel = c.panels[active];
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const closeMenu = () => setMenu(false);
  const nav = <>{c.nav.map((label, i) => <a key={label} href={`#${['features', 'screenshots', 'questions'][i]}`} onClick={closeMenu}>{label}</a>)}<a className="nav-download" href="#download" onClick={closeMenu}>{c.download}</a></>;
  const selectTab = (index, focus = false) => {
    setActive(index);
    if (focus) document.getElementById(`feature-tab-${index}`)?.focus();
  };
  return <div className="revamp">
    <a className="skip-link" href="#main">{locale === 'es' ? 'Ir al contenido' : 'Skip to content'}</a>
    <header className="site-header"><div className="site-width nav-inner">
      <a className="wordmark" href="#" aria-label="Wishio"><WishioLogo className="brand-icon" iconClassName="w-6 h-6" />wishio<span className="brand-period">.</span></a>
      <nav className="desktop-nav" aria-label={locale === 'es' ? 'Principal' : 'Main'}>{nav}</nav>
      <div className="nav-controls"><select aria-label={c.language} value={locale} onChange={e => setLanguage(e.target.value)}><option value="en">EN</option><option value="es">ES</option></select><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? c.close : c.menu} aria-expanded={menu} aria-controls="mobile-navigation">{menu ? <X /> : <Menu />}</button></div>
    </div>{menu && <nav id="mobile-navigation" className="mobile-nav">{nav}</nav>}</header>
    <main id="main">
      <section className="hero-section"><div className="site-width hero-grid">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={16} aria-hidden="true" />{c.eyebrow}</p><h1>{c.title}<br /><em>{c.highlight}</em></h1><p className="hero-description">{c.intro}</p><div className="hero-actions"><StoreLink copy={c} /><span className="device-note">{c.devices}<small>{c.free}</small></span></div><a className="text-link" href="#features">{c.explore}</a></div>
        <div className="hero-art"><span className="art-spark spark-one" aria-hidden="true">✧</span><span className="art-spark spark-two" aria-hidden="true">✳</span><img className="hero-poster poster-back" src={asset('greetings', locale)} alt={c.tabs[2]} width="650" height="1407" /><img className="hero-poster poster-front" src={asset('reminders', locale)} alt={c.panels[0].title} width="650" height="1407" fetchPriority="high" /><div className="hero-sticker"><Heart size={19} fill="currentColor" aria-hidden="true" /><span>{c.ribbon[2]}</span></div></div>
      </div></section>
      <div className="occasion-ribbon"><div className="site-width">{c.ribbon.map((item, i) => { const Icon = [CalendarDays, Gift, Heart, PartyPopper][i]; return <span key={item}><Icon size={20} aria-hidden="true" />{item}</span>; })}</div></div>
      <section className="feature-section site-width" id="features"><div className="section-heading"><p className="eyebrow">{c.featureLabel}</p><h2>{c.featureTitle}<br /><em>{c.featureHighlight}</em></h2><p>{c.featureIntro}</p></div>
        <div className="feature-tabs" role="tablist" aria-label={c.nav[0]}>{c.tabs.map((tab, i) => { const Icon = icons[i]; return <button key={tab} id={`feature-tab-${i}`} type="button" role="tab" aria-selected={active === i} aria-controls="feature-panel" tabIndex={active === i ? 0 : -1} onClick={() => selectTab(i)} onKeyDown={e => { let next; if (e.key === 'ArrowRight') next = (i + 1) % c.tabs.length; if (e.key === 'ArrowLeft') next = (i + c.tabs.length - 1) % c.tabs.length; if (e.key === 'Home') next = 0; if (e.key === 'End') next = c.tabs.length - 1; if (next !== undefined) { e.preventDefault(); selectTab(next, true); } }}><Icon size={19} aria-hidden="true" />{tab}</button>; })}</div>
        <div className={`feature-panel panel-${panel.image}`} id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${active}`} tabIndex={0}><div className="feature-visual"><img key={`${panel.image}-${locale}`} src={asset(panel.image, locale)} alt={c.tabs[active]} width="650" height="1407" loading="lazy" /></div><div className="feature-copy"><span className="feature-kicker">{c.tabs[active]}</span><h3>{panel.title}</h3><p>{panel.body}</p><ul>{panel.bullets.map(b => <li key={b}><Check size={18} aria-hidden="true" />{b}</li>)}</ul><a className="pill-link" href="#download">{c.download}</a></div></div>
      </section>
      <section className="gallery-section" id="screenshots"><div className="site-width"><div className="gallery-heading"><div><p className="eyebrow">{c.galleryLabel}</p><h2>{c.galleryTitle}</h2></div><p>{c.galleryIntro}</p></div><div className="poster-gallery" tabIndex={0} aria-label={c.galleryHint}>{[0, 2, 3, 1, 4].map(i => <figure key={i}><img src={asset(c.panels[i].image, locale)} alt={c.panels[i].title} width="650" height="1407" loading="lazy" /><figcaption>{c.tabs[i]}</figcaption></figure>)}</div><p className="gallery-hint">{c.galleryHint}</p></div></section>
      <section className="device-section site-width"><div className="device-copy"><p className="eyebrow">{c.devicesLabel}</p><h2>{c.devicesTitle}</h2><p>{c.devicesBody}</p><div className="detail-list">{c.details.map(([title, text], i) => { const Icon = [Sparkles, Heart, CalendarDays][i]; return <div key={title}><Icon size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></div>; })}</div></div><div className="ipad-art"><img src="/screenshots/current/ipad.webp" alt={locale === 'es' ? 'Wishio en iPad: calendario y próximos eventos' : 'Wishio on iPad: calendar and upcoming events'} loading="lazy" width="1100" height="825" /><span>iPhone · iPad · Mac</span></div></section>
      <section className="faq-section site-width" id="questions"><div><p className="eyebrow">{c.faqLabel}</p><h2>{c.faqTitle}</h2></div><div className="faq-list">{c.faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section className="download-section site-width" id="download"><div className="download-card"><div><p className="eyebrow">{c.ctaLabel}</p><h2>{c.ctaTitle}<br /><em>{c.ctaHighlight}</em></h2><p>{c.ctaBody}</p><div className="download-actions"><StoreLink copy={c} /><span>{c.android}</span></div><small className="download-fineprint">{c.free}</small></div><div className="qr-card"><QRCodeSVG value={siteConfig.iosAppStoreUrl} size={144} level="M" fgColor="#30164d" title={c.scan} /><span>{c.scan}</span></div><span className="download-spark" aria-hidden="true">✳</span></div></section>
    </main>
    <footer className="site-footer site-width"><div className="footer-top"><a className="wordmark" href="#"><WishioLogo className="brand-icon" iconClassName="w-6 h-6" />wishio.</a><p>{c.by} <a href={siteConfig.companyWebsite} target="_blank" rel="noopener noreferrer">interware.dev</a></p><nav aria-label="Legal"><a href={siteConfig.privacyPolicyUrl}>{c.privacy}</a><a href={siteConfig.termsUrl}>{c.terms}</a><a href={`mailto:${siteConfig.contactEmail}`}>{c.contact}</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}. {c.rights}</span><span>{c.devices}</span></div></footer>
  </div>;
}
