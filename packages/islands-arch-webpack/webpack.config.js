const { composePlugins, withNx, withWeb } = require('@nrwl/webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withWeb(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'menu',
      filename: 'remoteEntry.js',
      remotes: {
        menu: 'menu@http://localhost:8083/remoteEntry.js',
      },
    })
  );

  return config;
});
