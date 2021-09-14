import { ServerMiddleware } from '@nuxt/types'

const loggerMiddleware: ServerMiddleware = function (req, res, next) {
  console.log('server log! request: ', req.url);
  next();
}

export default loggerMiddleware
