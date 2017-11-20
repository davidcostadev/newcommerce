import Intl from 'intl'

global.Intl = Intl

export const toFloat = number => parseFloat(number.replace(',', '.'), 10)

export const floatToReal = (float) => {
  const float2Decimal = Math.round(float * 100) / 100
  return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(float2Decimal)
  // return float2Decimal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}
export const StringToReal = (number) => {
  const float = toFloat(number)
  return floatToReal(float)
}

export default {
  toFloat,
  floatToReal,
  StringToReal,
}
