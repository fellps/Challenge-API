import Business from './business'

const Routes = function (router, use) {
  use(async (ctx, next) => {
    await next()
    console.log(`ANSWERING: ${ctx.status} - ${ctx.method} - ${ctx.originalUrl}`)
  })

  /** Notification */
  router.get('/notification', Business.Notification.get)
}

module.exports = Routes
