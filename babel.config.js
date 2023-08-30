module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@pages': './src/pages',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils'
        }
      }]
    ]
  };
};
