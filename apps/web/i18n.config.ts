export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  numberFormats: {
    pl: {
      PLN: {
        style: 'currency',
        currency: 'PLN',
        currencyDisplay: 'symbol'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol'
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol'
      }
    }
  }
}))
