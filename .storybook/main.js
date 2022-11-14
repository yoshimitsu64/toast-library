const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../', 'src/components'),
      '@constants': path.resolve(__dirname, '../', 'src/constants'),
      '@helpers': path.resolve(__dirname, '../', 'src/helpers'),
      '@utils': path.resolve(__dirname, '../', 'src/utils'),
      '@animation': path.resolve(__dirname, '../', 'src/animation'),
    };

    return config;
  },
  framework: '@storybook/react',
};
