import jsCookie from 'js-cookie'

const cookie = (key, { isServer, req }) => {
  if (isServer) {
    return req.cookies[key] || null
  }

  return jsCookie.get(key) || null
}

export default cookie
