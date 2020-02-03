const path = require('path')
const glob = require('glob')
const { runMigration } = require('contentful-migration/built/bin/cli')

class Migrate {
  static run(files) {
    return files.map(file => {
      return runMigration({
        yes: true,
        filePath: file,
        ...this.config,
      })
    })
  }

  static setConfig(config) {
    this.config = {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
      ...config,
    }
  }

  static getFiles(folder, reverse = true) {
    const files = []

    let folderFiles = glob.sync(`${__dirname}/../migrations/${folder}/*.js`)
    folderFiles = folderFiles.sort(this.sortTimestamps)
    if (reverse) {
      folderFiles = folderFiles.reverse()
    }

    folderFiles.forEach(folderFile => {
      files.push(path.resolve(folderFile))
    })

    return files
  }

  static sortTimestamps(left, right) {
    const filesLeft = left.split('/')
    let numberLeft = filesLeft[filesLeft.length - 1].split('_')
    numberLeft = parseInt(numberLeft[0], 10)

    const filesRight = right.split('/')
    let numberRight = filesRight[filesRight.length - 1].split('_')
    numberRight = parseInt(numberRight[0], 10)

    if (numberLeft < numberRight) {
      return -1
    }
    if (numberLeft > numberRight) {
      return 1
    }
    return 0
  }
}

module.exports = Migrate
