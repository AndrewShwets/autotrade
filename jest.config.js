module.exports = {
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "react",
    "sourceMap": false,
    "experimentalDecorators": true,
    "noImplicitUseStrict": true,
    "removeComments": true,
    "moduleResolution": "node",
    "lib": [
      "es2017",
      "dom"
    ],
    "typeRoots": [
      "node_modules/@types"
    ]
  },
  "exclude": [
    "node_modules",
    "out",
    ".next"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}