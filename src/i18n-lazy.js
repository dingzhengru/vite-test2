import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

const i18n = new createI18n({
  legacy: false,
  globalInjection: true, //* 這樣才能直接用 $t
});

// export function setupI18n(options = { locale: 'en-us' }) {
// const i18n = createI18n(options);
// setI18nLanguage(i18n, options.locale);
// return i18n;
// }

export function setI18nLanguage(locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  document.querySelector('html').setAttribute('lang', locale);
}

export async function loadLanguageAsync(locale) {
  // load locale messages with dynamic import
  const messages = await import(`./locales/${locale}.json`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  setI18nLanguage(locale);

  return nextTick();
}
export default i18n;
