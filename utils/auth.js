
export default (isLogged, rule) => {
  if (isLogged) {
    return rule.guest
  }

  return !rule.guest
}

