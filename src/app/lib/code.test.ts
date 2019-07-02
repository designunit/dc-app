import { getCodeParts, splitCode, getTagPrefix } from './code'

describe('app lib code', () => {
    describe('getCodeParts', () => {
        it('should properly split code into parts', () => {
            const parts = getCodeParts('PAV-PRD1-MAT1-PAT2-COL1-BST1')

            expect(parts).toEqual(['PAV', 'PRD1', 'MAT1', 'PAT2', 'COL1', 'BST1'])
        })
    })

    describe('splitCode', () => {
        it('should properly split code into parts', () => {
            const parts = splitCode('PAV-PRD1-MAT1-PAT2-COL1-BST1')

            expect(parts).toEqual(['PAV', 'PRD1', 'MAT1', 'PAT2', 'COL1', 'BST1'])
        })

        it('should works with code aliases', () => {
            const parts = splitCode('some_paving')

            expect(parts).toEqual(['some_paving'])
        })

        it('should fill missing prefix in sequence', () => {
            const parts = splitCode('PAV-MAT1-2-3-COL1')

            expect(parts).toEqual(['PAV', 'MAT1', 'MAT2', 'MAT3', 'COL1'])
        })
    })

    describe('getTagPrefix', () => {
        it('should properly extract prefix from code', () => {
            expect(getTagPrefix('MAT1')).toEqual('MAT')
        })

        // it('should extract whole numeric alias', () => {
        //     expect(getTagPrefix('some_code_1')).toEqual('some_code_1')
        // })
    })
})
