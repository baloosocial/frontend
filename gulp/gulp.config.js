module.exports = function() {

  var JSPath = '../scripts/',
      vendorsJsSrc = JSPath + 'vendor/',
      //vendorsJsPath = vendorsJsSrc, //JSPath + 'vendor',      
      cssPath = '../Styles/',
      lessSrc = cssPath + '/less/';

  var config = {
    // Base js configs
      mainJsMin : 'main.min.js',
      mainJsDest : JSPath,

      mainJsFiles : [
        JSPath + 'QValidation.js'
        ,JSPath + 'main.js'
        ,JSPath + 'tracking.js'
        ,JSPath + 'common-lib.js'
      ],

    // Vendors js configs
      vendorsJsMin : 'vendors.min.js',
      vendorsJsDest : vendorsJsSrc,

      vendorsJsFiles: [        
        vendorsJsSrc + 'modernizr.custom.js'
        ,vendorsJsSrc + 'AppMeasurement.js'
        ,vendorsJsSrc + 'fastclick.min.js'
        ,vendorsJsSrc + 'jquery.blockUI.js'
        ,vendorsJsSrc + 'spin.min.js'
        ,vendorsJsSrc + 'css_browser_selector.js'
        ,vendorsJsSrc + 'bootstrap.min.js'
        ,vendorsJsSrc + 'bootstrap-datepicker.min.js'           
        ,vendorsJsSrc + 'magnific_popup.js'
        ,vendorsJsSrc + 'hoverIntent.js'
        ,vendorsJsSrc + 'superfish.js'
        ,vendorsJsSrc + 'QueryString.js'
      ],

      // Less configs
      cssDest : cssPath,
      lessSrc : '../less/',
      lessMaster : '../less/master.less',
      cssMaster : 'master.css'

  };

  return config;
}