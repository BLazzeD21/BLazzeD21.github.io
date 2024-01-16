module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  // 'overrides': [".eslintrc.js"],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  "ignorePatterns": [".eslintrc.js"],
  'rules': {
    'indent': ['warn', 2],
    'eol-last': 'warn',
    'no-unused-vars': 'warn',
    'quotes': ['warn', "single"],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
  },
};