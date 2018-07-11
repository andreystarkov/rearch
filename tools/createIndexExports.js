const fs = require('fs')

if (process.argv.length <= 2) {
  console.log('Index exports tool.')
  console.log(`Usage: ${__filename} path/to/directory`)
  process.exit(-1)
} else {
  const path = process.argv[2]

  const isDirectory = (file) => fs.statSync(path + '/' + file).isDirectory()
  const getDirectories = (path) => fs.readdirSync(path).filter(isDirectory)

  const directories = getDirectories(path)

  let data = ''

  const importsList = dir => `import ${dir} from './${dir}'`
  const exportsList = dir => `  ${dir}`

  data += directories.map(importsList).join('\n')
  data += '\n\n'
  data += `export {\n${directories.map(exportsList).join(',\n')}\n}\n`

  fs.writeFile(
    path + '/index.js',
    data,
    (err) => console.log(
      err ? 'Error: ' + err
        : 'Success! index.js created at ' + path + '.\nTotal modules: ' + directories.length)
  )
}
