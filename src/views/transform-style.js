
var services = require('../services.js'); 
module.exports = function(css) {

  // change the css to be valid only for this instance using the id tag of the script (document.currentScript)		
  const transformed = css.replace(/.widgetID/gi, '#widget_' + services.scriptId );

  return transformed;
};