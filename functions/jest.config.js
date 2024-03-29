module.exports = {
    testRegex: 'src(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    moduleFileExtensions: ['js','ts','tsx','jsx','json','node'],
    testEnvironment: 'node',
    rootDir: 'src',
    //setupFilesAfterEnv: ['./jest.setup.js']
}

// jest.setup.js
//jest.setTimeout(30000)