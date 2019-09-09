const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../../');

module.exports = {
  root: PROJECT_ROOT,
  output: path.join(PROJECT_ROOT, 'dist')
};
