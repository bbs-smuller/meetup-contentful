import moment from 'moment'

export const formatDate = (date, locale) => {
  const format = locale === 'fr-FR' ? 'DD/MM/YYYY HH:mm' : 'YYYY-MM-DD HH:ss'

  return moment(new Date(date)).format(format)
}
