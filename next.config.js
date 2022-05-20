const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.join(process.cwd(), 'icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            outputPath: 'static/',
            publicPath: 'static/'
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.svg$/i,
      include: path.join(process.cwd(), 'public', 'images'),
      use: [
        {
          loader: '@svgr/webpack',
          // https://react-svgr.com/docs/options/
          options: {
            prettier: false,
            svgo: true,
            titleProp: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false
                },
                {
                  name: 'prefixIds',
                  active: false
                }
              ]
            }
          }
        },
        {
          loader: 'url-loader'
        }
      ]
    });

    config.plugins.push(new SpriteLoaderPlugin());

    return config;
  }
};

module.exports = nextConfig;
