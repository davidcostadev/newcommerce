/* eslint no-undef: "off" */

import * as money from '../../utils/money'

describe('Functions Money', () => {
  it('money.toFloat', () => {
    expect(money.toFloat('100,00')).toBe(100)
    expect(money.toFloat('100,01')).toBe(100.01)
    expect(money.toFloat('0,01')).toBe(0.01)
    expect(money.toFloat('1,10')).toBe(1.1)
    expect(money.toFloat('0,00001')).toBe(0.00001)
  })

  it('money.floatToReal', () => {
    expect(money.floatToReal(0.01)).toBe('0,01')
    expect(money.floatToReal(1)).toBe('1,00')
    expect(money.floatToReal(100)).toBe('100,00')
    expect(money.floatToReal(1000)).toBe('1.000,00')
    expect(money.floatToReal(0.00001)).toBe('0,00')
    expect(money.floatToReal(0.004)).toBe('0,00')
    expect(money.floatToReal(0.009)).toBe('0,01')
  })

  it('money.StringToReal', () => {
    expect(money.StringToReal('243,8')).toBe('243,80')
    expect(money.StringToReal('4509,3')).toBe('4.509,30')
    expect(money.StringToReal('11')).toBe('11,00')
  })

  it('money.stringToDesconto', () => {
    expect(money.stringToDesconto('100,50', 10)).toBe('90,45')
    expect(money.stringToDesconto('100', 10)).toBe('90,00')
    expect(money.stringToDesconto('100', 10)).toBe('90,00')
  })
})
