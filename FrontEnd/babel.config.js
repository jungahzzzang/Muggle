module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      // 'module-resolver',
      // {
      //   "root" : [
      //     "./src"
      //   ],
      //   "extensions": [
      //     '.ios.ts',
      //     '.android.ts',
      //     '.ts',
      //     '.ios.tsx',
      //     '.android.tsx',
      //     '.tsx',
      //     '.jsx',
      //     '.js',
      //     '.json',
      //   ],
      //   "alias": {
      //     '~': './src',
      //     '@components': './src/components',
      //     '@screens': './src/screens',
      //     '@navigations': './src/navigations',
      //     /*'@assets': './src/assets',*/
      //     /*'@query': './src/query',*/
      //   }
      // }
    ],
  };
};