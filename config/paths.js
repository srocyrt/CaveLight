const path = require('path');

const phaserModule = path.join(__dirname, './../node_modules/phaser/');
const phaser = path.join(phaserModule, './../src/phaser.js');
const nodeModules = path.join(__dirname, './../node_modules/');
const dist = path.join(__dirname, '../dist');
const dev = path.join(__dirname, '../dev');
const ghpages = path.join(__dirname, '../gh-pages');

const packageJSON = require('../package.json');

const ghPagesAppName = packageJSON.homepage.split('/').pop();

console.log('app name', ghPagesAppName);

const paths = {
  nodeModules: nodeModules,
  phaserModule: phaserModule,
  phaser: phaser,
  dist: dist,
  ghpages: ghpages,
  dev: dev,
  ghPagesAppName: ghPagesAppName
};

module.exports = paths;
