const Generator = require('yeoman-generator');

const files = require('./files');
const validate = require('./validate');

module.exports = class extends Generator {
  initializing() {
    this.log('OSS Project Generator');
    this.log();
  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
        default: 'awesome-project'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        default: 'An awesome project'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: validate.validateName,
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: validate.validateEmail,
        store: true
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: validate.validateUsername,
        store: true
      }
    ];

    this.prompt(prompts).then((props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    this.log();
    this.log('🚀  Generating project...');
    this.log();

    const templates = {
      project: this.props.project,
      description: this.props.description,
      name: this.props.name,
      email: this.props.email,
      username: this.props.username,
      year: new Date().getFullYear()
    };

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log('📦  Installing dependencies...');
    this.log();

    this.npmInstall(
      [
        '@types/jest',
        'coveralls',
        'eslint',
        'eslint-config-prettier',
        'eslint-plugin-prettier',
        'jest',
        'prettier'
      ],
      { 'save-dev': true }
    );
  }

  end() {
    this.log();
    this.log('🎉  Successfully generated!');
  }
};
