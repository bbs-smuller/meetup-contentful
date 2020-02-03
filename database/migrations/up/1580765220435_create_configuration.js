module.exports = migration => {
  const contentType = migration.createContentType('configuration')
  contentType.name('⚙️ Configuration').description('Application configuration')

  contentType
    .createField('backendTitle')
    .name('Backend title')
    .type('Symbol')
    .required(true)
    .validations([{ unique: true }])

  contentType
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true)
    .localized(true)

  contentType
    .createField('meetupDate')
    .name('Meetup date')
    .type('Date')
    .required(true)
  contentType.changeFieldControl('meetupDate', 'builtin', 'datePicker', { format: 'time' })

  contentType
    .createField('labels')
    .name('Micro-copy')
    .type('Object')
    .localized(true)
  contentType.changeFieldControl('labels', 'builtin', 'objectEditor')

  contentType.displayField('backendTitle')
}
