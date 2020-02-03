require('dotenv').config()

const Migrate = require('./database/libraries/Migrate')

Migrate.setConfig({
  environmentId: 'meetup',
})

let files = null
switch (process.argv[2]) {
  case 'up':
    files = Migrate.getFiles('up')
    break
  case 'down':
    files = Migrate.getFiles('down', true)
    break
  default:
    console.error(`Invalid command "${process.argv.join(' ')}"`)
}

if (files && files.length > 0) {
  Promise.all(Migrate.run(files))
    .then(() => {
      //
    })
    .catch(error => console.error(error))
}
