module.exports = migration => {
  const contentType = migration.createContentType('productCategories')
  contentType.name('🏷 Product categories').description('Product categories')

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
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .validations([{ linkMimetypeGroup: ['image'] }])

  contentType
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(true)
  contentType.changeFieldControl('description', 'builtin', 'markdown')

  contentType.displayField('backendTitle')
}
