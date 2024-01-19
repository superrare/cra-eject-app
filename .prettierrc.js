module.exports = {
  printWidth: 80,
  useTabs: false,
  bracketSameLine: false,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  overrides: [
    {
      files: 'src/constants/actionTypes.js',
      options: {
        printWidth: 300
      }
    }
  ]
}
