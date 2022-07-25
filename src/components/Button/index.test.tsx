import { sum, sub } from './index'

test('should sum two numbers', () => {
    expect(sum(3, 3)).toBe(6)
})

test('shoud subtract two numbers', () => {
    expect(sub(10, 11)).toBe(-1)
})
