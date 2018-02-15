import Intl from 'intl'
import 'intl/locale-data/jsonp/pt-BR'

if (typeof window === 'undefined') {
  global.Intl = Intl
}

export const toFloat = number => parseFloat(number.replace(',', '.'), 10)

export const floatToReal = (float) => {
  const float2Decimal = Math.round(float * 100) / 100
  return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(float2Decimal)
}

export const StringToReal = (number) => {
  if (typeof number === 'undefined') return 0
  const float = toFloat(number)
  return floatToReal(float)
}

export const stringToDesconto = (value, desconto) => {
  const float = toFloat(value)
  const factor = (100 - desconto) * 0.01

  return floatToReal(factor * float)
}


export const calcFactor = (value, factor) => {
  const float = toFloat(value)

  return floatToReal(factor * float)
}
