import { arraySplit, arrayPrune } from './array'

describe('array', () => {
    describe('arraySplit', () => {
        it('should properly split array', () => {
            const sample = [1, 1, 1, 2, 3, 1, 1, 4, 5, 6, 1, 1,7, 8, 9]
            const [ones, others] = arraySplit(sample, x => x === 1)

            expect(ones).toEqual([1, 1, 1, 1, 1, 1, 1])
            expect(others).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
        })
    })

    describe('arrayPrune', () => {
        it('should properly prune array', () => {
            const sample = [1, 1, 1, 2, 3, 1, 1, 4, 5, 6, 1, 1, 7, 8, 9]
            const others = arrayPrune(sample, 1)

            expect(others).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
        })
    })
})
