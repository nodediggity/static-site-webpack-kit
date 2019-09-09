const buildValidations = require('./config/webpack/build-validations');
const commonConfig = require('./config/webpack/webpack.common');
const webpackMerge = require('webpack-merge');

const config = ({ env, addons }) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./config/webpack/webpack.${env}.js`);

  const mergedConfig = webpackMerge(commonConfig, envConfig);

  return mergedConfig;
};

module.exports = config
