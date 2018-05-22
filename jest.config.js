module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '.*\.tsx?$': 'ts-jest',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'scss',
    'css'
  ]
}