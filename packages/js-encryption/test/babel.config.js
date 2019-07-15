module.exports = {
  presets: [
    // [
    //   "@babel/preset-env",
    //   {
    //     targets: {
    //       // "esmodules": false
    //     },
    //     // modules: true
    //   }
    // ]
    [
      // "../packages/babel/babel-preset-pro-vue",
      '@web-pro/babel-preset-pro-vue'
    ]
  ],
  plugins: [
    // ['import', {
    //   libraryName: 'vant',
    //   libraryDirectory: 'es',
    //   style: true
    // }, 'vant'],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
