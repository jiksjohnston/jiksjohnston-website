const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Julia Strnad Johnston',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}

