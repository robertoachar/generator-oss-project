import assert from 'yeoman-assert';
import test from 'yeoman-test';
import path from 'path';

import files from '../generators/app/files';

describe('Generator Tests', () => {
  beforeAll((done) => {
    test
      .run(path.join(__dirname, '../generators/app/main.js'))
      .withPrompts({
        project: 'awesome-project',
        description: 'An awesome project',
        name: 'Roberto Achar',
        email: 'robertoachar@gmail.com',
        username: 'robertoachar'
      })
      .on('end', done);
  });

  it('should create a project', (done) => {
    files.forEach((file) => {
      assert.file(file.destination);
    });

    done();
  });
});
