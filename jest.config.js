module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json',
            diagnostics: false,
        }
    },
    roots: [
        'src',
    ],
    collectCoverageFrom: [
        'src/**/*.{ts, tsx}',
        
        // no coverage in
        '!**/node_modules/**',
        '!**/components/**',
    ],
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
    },
    testMatch: [
        '**/*.test.(ts|js)'
    ],
    testEnvironment: 'node'
};