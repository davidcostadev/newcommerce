import Intl from 'intl'

global.Intl = Intl

export const toFloat = number => parseFloat(number.replace(',', '.'), 10)

export const floatToReal = (float) => {
  const float2Decimal = Math.round(float * 100) / 100
  return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(float2Decimal)
}

export const StringToReal = (number) => {
  const float = toFloat(number)
  return floatToReal(float)
}

export const stringToDesconto = (value, desconto) => {
  const float = toFloat(value)
  const factor = (100 - desconto) * 0.01

  return floatToReal(factor * float)
}
