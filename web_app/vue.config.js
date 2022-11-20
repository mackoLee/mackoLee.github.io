const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../',

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  }
})
