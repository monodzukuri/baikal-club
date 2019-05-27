const globalCSS = require('./src/styles/global.css')

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  if (prevLocation){
    window.unbindAll();
    window.reloadSlides();
    console.log('slides reloaded!');
  } else{
    window.initGlobals();
    console.log('globals loaded!');
  }
}
