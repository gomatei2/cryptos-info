module.exports = {
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'pt-BR',
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then(m => m.default),
  pages: {
    '*': ['common'],
    '/': ['home']
  }
}
