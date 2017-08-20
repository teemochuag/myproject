const Koa = require(`koa`)
const app = new Koa()

//plugin
const loadStatic = require(`./public/js/loadStatic`)

// 要把靜態的檔案讀近來，再讓html去抓，路徑的設定要注意
// publicPath + html的href 才等於路徑
const path = require(`path`)
const pathstatic = require(`koa-static`)
const publicPath = `./public`

// 讀黨
const Router = require(`koa-router`)

let home = new Router()
let page = new Router()
let router = new Router()

// app.use(pathstatic(path.join(__dirname, publicPath)))
app.use(pathstatic(
  path.join(__dirname, publicPath)
))

// sub router1
home.get(`/`, async (ctx, next) => {
  console.log(`/ be called`)
  let html = await loadStatic.getHtml()
  ctx.body = html
})

home.get(`A`, async (ctx, next) => {
  console.log(`request A be called`)
  let html = await loadStatic.getHtml()
  ctx.body = html
})

// all of routers
router.use('/', home.routes(), home.allowedMethods())
router.use('/A', page.routes(), page.allowedMethods())

// load router middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('[demo] route-use-middleware is starting at port 3000')

// allowMethods 用來設定request的 (post, get, delete, put) restful API
// router.router()會自動依據 request的路徑 匹配路由
