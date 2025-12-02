export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    warnHtmlInMessage: false,
    warnHtmlMessage: false,
    escapeParameterHtml: true,
  }
})
