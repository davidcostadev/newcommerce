import jsCookie from 'js-cookie'
import Router from 'next/router'

export const redirect = (context, target) => {
  if (context.isServer) {
    // server
    // 303: "See other"
    context.res.redirect(target)
    context.res.finished = true
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}

export const authSession = ({ isServer, req }) => {
  if (isServer) {
    return req.cookies.logged === 'true' || false
  }

  return jsCookie.get('logged') === 'true' || false
}
