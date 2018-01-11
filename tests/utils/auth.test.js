import redirect from '../../utils/auth'


it('should redirect for guests', () => {
  const isLogged = false

  const allowPermission = {
    guest: false,
  }

  expect(redirect(isLogged, allowPermission)).toBe(true)
})

it('should not redirect for guests', () => {
  const isLogged = false

  const allowPermission = {
    guest: true,
  }

  expect(redirect(isLogged, allowPermission)).toBe(false)
})

it('should redirect for loggeds', () => {
  const isLogged = true

  const allowPermission = {
    guest: true,
  }

  expect(redirect(isLogged, allowPermission)).toBe(true)
})

it('should not redirect for loggeds', () => {
  const isLogged = true

  const allowPermission = {
    guest: false,
  }

  expect(redirect(isLogged, allowPermission)).toBe(false)
})
