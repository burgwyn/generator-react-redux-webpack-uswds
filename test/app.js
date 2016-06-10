'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-redux-webpack-uswds:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.babelrc',
      '.gitattributes',
      '.gitignore',
      'jsconfig.json',
      'webpack.config.js'
    ]);
  });
});
