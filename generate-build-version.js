const fs = require('fs').promises
const parse = require('node-html-parser').parse
const moment = require('moment')
console.log('Version code building...')

const main = async () => {
  try {
    const note = await fs.readFile('src/release/note.json')
    var metadataNote = JSON.parse(note)

    const history = await fs.readFile('src/release/history.json')
    var metadataHistory = JSON.parse(history)
    const updateTime = moment(Date.now()).format('YYYY-MM-DD / HH:mm A')
    const content = await fs.readFile('src/Release/metadata.json')
    var metadata = JSON.parse(content)
    metadata.buildRevision = metadata.buildRevision + 1
    const VERSION = `${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision}`
    metadata.version = VERSION
    metadata.updateTime = updateTime
    fs.writeFile('src/release/metadata.json', JSON.stringify(metadata))
    metadataHistory.unshift({
      ...metadataNote,
      version: VERSION,
      updateTime: updateTime,
    })
    fs.writeFile('src/release/history.json', JSON.stringify(metadataHistory))
    autoVersion(VERSION)
  } catch (error) {
    console.log(error)
  }
}

main()

const autoVersion = async (version) => {
  const content = await fs.readFile('./public/index.html')
  const root = parse(content)
  const versionTag = root.querySelector('#build-version')
  const scriptTag = root.querySelectorAll('script')
  for (let index = 0; index < scriptTag.length; index++) {
    const element = scriptTag[index]
    const src = element.getAttribute('src')
    if (src) {
      element.setAttribute('src', src.split('?')[0] + `?v=${version}`)
    }
  }
  versionTag.innerHTML = ` window.VIEWER_VERSION = '${version}'`
  await fs.writeFile('./public/index.html', root.innerHTML)
}
