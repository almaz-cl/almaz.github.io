// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const autoprefixer = require("autoprefixer");
const tailwind = require('tailwindcss');


const postcssPlugins = [
  tailwind(),
  autoprefixer()
]

//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())


module.exports = {
  siteName: 'Almaz Belly Dance',
  siteDescription: 'Academia De Danza Oriental Almaz Nur',
  pathPrefix: 'almaz.github.io',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */},
        pugLoader: { /* Options for `pug-loader` */}
      }
    }
  ],

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }

}
