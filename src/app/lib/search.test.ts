import { filterCodesByKeywords } from './search'
import { ICode } from '../types'

describe('app lib search', () => {
    describe('filterCodesByKeywords', () => {
        it('should properly filter code list by keywords', () => {
            const codes: ICode[] = [
                {
                    id: 'PAV-PRD1-MAT1-PAT2-COL1-BST1',
                    code: ['PAV', 'PRD1', 'MAT1', 'PAT2', 'COL1', 'BST1'],
                    title: '1',
                    keywords: new Set(['PAV', 'PRD1', 'MAT1', 'PAT2', 'COL1', 'BST1', '1']),
                },
                {
                    id: 'PAV-PRD2-MAT2-BST1',
                    code: ['PAV', 'PRD2', 'MAT2', 'BST1'],
                    title: '2',
                    keywords: new Set(['PAV', 'PRD2', 'MAT2', 'BST1', '2']),
                },
            ]
            const query = new Set(['2', 'MAT2'])

            expect(filterCodesByKeywords(codes, query)).toEqual([
                codes[1]
            ])
        })
    })
})
