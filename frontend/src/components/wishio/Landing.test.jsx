import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from '../../i18n/LanguageContext';
import Landing from './Landing';
let container, root;
beforeEach(() => {
  window.localStorage.clear();
  global.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement('div'); document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<LanguageProvider><Landing /></LanguageProvider>));
});
afterEach(() => { act(() => root.unmount()); container.remove(); });
test('feature tabs select content and support keyboard navigation', () => {
  const tabs = container.querySelectorAll('[role="tab"]');
  act(() => tabs[1].click());
  expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  expect(container.querySelector('[role="tabpanel"]').textContent).toContain('Good gift ideas');
  act(() => tabs[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true })));
  expect(document.activeElement).toBe(tabs[4]);
  expect(tabs[4].getAttribute('aria-selected')).toBe('true');
  expect(container.querySelector('[role="tabpanel"] img').getAttribute('src')).toContain('celebrate.webp');
});
test('language selection updates content and artwork together', () => {
  const select = container.querySelector('select');
  act(() => { select.value = 'es'; select.dispatchEvent(new Event('change', { bubbles: true })); });
  expect(container.querySelector('h1').textContent).toContain('Recuerda la fecha');
  expect(container.querySelector('.poster-front').getAttribute('src')).toContain('/es/');
  expect(document.documentElement.lang).toBe('es');
  expect(window.localStorage.getItem('wishio-language')).toBe('es');
});
test('mobile navigation closes on selection and store and legal links remain available', () => {
  const toggle = container.querySelector('.menu-toggle');
  act(() => toggle.click());
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  act(() => container.querySelector('#mobile-navigation a').click());
  expect(container.querySelector('#mobile-navigation')).toBeNull();
  container.querySelectorAll('.store-link').forEach(link => {
    expect(link.href).toContain('id6757369255'); expect(link.rel).toContain('noopener');
  });
  expect(container.querySelector('a[href="/privacy"]')).not.toBeNull();
  expect(container.querySelector('a[href="/terms-and-conditions"]')).not.toBeNull();
});
