const path = require('path');
const { override, fixBabelImports, addWebpackResolve, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx"],
  }),
  //给文件夹起别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
  //启用装饰器
  addDecoratorsLegacy({
    "extends": "react-app",
    "parseOptions": {
      "ecmaFeatures": {
        "legacyDecorators": true
      }
    }
  }),
);