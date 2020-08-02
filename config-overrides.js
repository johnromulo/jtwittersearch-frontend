const path = require('path');
const { addWebpackAlias } = require('customize-cra');

module.exports = function override(config, env) {
  config = addWebpackAlias({
    '@store': path.resolve(__dirname, 'src', 'store'),
    '@components': path.resolve(__dirname, 'src', 'components'),
    '@pages': path.resolve(__dirname, 'src', 'pages'),
    '@services': path.resolve(__dirname, 'src', 'services'),
    '@styles': path.resolve(__dirname, 'src', 'styles'),
    '@assets': path.resolve(__dirname, 'src', 'assets'),
    '@interfaces': path.resolve(__dirname, 'src', 'interfaces'),
    '@config': path.resolve(__dirname, 'src', 'config'),
    '@hooks': path.resolve(__dirname, 'src', 'hooks'),
  })(config);

  return config;
};
