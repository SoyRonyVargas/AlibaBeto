import ViteGraphQLPlugin from 'vite-plugin-graphql';

export default {
  plugins: [
    ViteGraphQLPlugin(),
  ],
  resolve: {
    alias: {
      '@apollo/client': '@apollo/client/core',
    },
  },
};
