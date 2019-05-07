const files = [
  { template: 'src/index.js.template', destination: 'src/index.js' },
  { template: 'test/test.js.template', destination: 'test/test.js' },
  { template: 'appveyor.yml.template', destination: 'appveyor.yml' },
  { template: 'babelrc.template', destination: '.babelrc' },
  { template: 'CHANGELOG.md.template', destination: 'CHANGELOG.md' },
  { template: 'circle.yml.template', destination: 'circle.yml' },
  { template: 'editorconfig.template', destination: '.editorconfig' },
  { template: 'eslintignore.template', destination: '.eslintignore' },
  { template: 'eslintrc.json.template', destination: '.eslintrc.json' },
  { template: 'gitattributes.template', destination: '.gitattributes' },
  { template: 'gitignore.template', destination: '.gitignore' },
  { template: 'LICENSE.template', destination: 'LICENSE' },
  { template: 'npmrc.template', destination: '.npmrc' },
  { template: 'main.js.template', destination: 'main.js' },
  { template: 'package.json.template', destination: 'package.json' },
  { template: 'prettierrc.template', destination: '.prettierrc' },
  { template: 'README.md.template', destination: 'README.md' },
  { template: 'travis.yml.template', destination: '.travis.yml' }
];

export default files;
