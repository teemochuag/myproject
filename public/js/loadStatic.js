// 讀黨
const fs = require(`fs`)

module.exports.getHtml = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./public/html/index.html`, `utf-8`, (err, data) => {
      if (err) { reject(err) } else { resolve(data) }
    })
  }
  )
}
