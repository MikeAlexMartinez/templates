module.exports = {
  bundle: {
    main: {
      scripts: './MyCode/src/js/main.js'
    },
    vendor: {
      scripts: [
        './MyCode/src/js/vendors/jquery-v1.12.5.js',
        './MyCode/src/js/vendors/jquery.fancybox-v2.1.4.js',
        './node_modules/waypoints/noframework.waypoints.js',
      ]
    }
  }
};