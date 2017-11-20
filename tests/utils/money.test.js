/* eslint no-undef: "off" */

import { toFloat, floatToReal, StringToReal, stringToDesconto } from '../../utils/money'

describe('Functions Money', () => {
  it('toFloat', () => {
    expect(toFloat('100,00')).toBe(100)
    expect(toFloat('100,01')).toBe(100.01)
    expect(toFloat('0,01')).toBe(0.01)
    expect(toFloat('1,10')).toBe(1.1)
    expect(toFloat('0,00001')).toBe(0.00001)
  })

  it('floatToReal', () => {
    expect(floatToReal(0.01)).toBe('0,01')
    expect(floatToReal(1)).toBe('1,00')
    expect(floatToReal(100)).toBe('100,00')
    expect(floatToReal(1000)).toBe('1.000,00')
    expect(floatToReal(0.00001)).toBe('0,00')
    expect(floatToReal(0.004)).toBe('0,00')
    expect(floatToReal(0.009)).toBe('0,01')
  })

  it('StringToReal', () => {
    expect(StringToReal('243,8')).toBe('243,80')
    expect(StringToReal('4509,3')).toBe('4.509,30')
    expect(StringToReal('11')).toBe('11,00')
  })

  it('stringToDesconto', () => {
    expect(stringToDesconto('100,50', 10)).toBe('90,45')
    expect(stringToDesconto('100', 10)).toBe('90,00')
    expect(stringToDesconto('100', 10)).toBe('90,00')
  })
})
