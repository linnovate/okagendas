angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'dx', 'ezfb'])
.run(function (ezfb) {
  ezfb.init({
    // This is my FB app id for plunker demo app
    appId: '633539833387959'
  });  
});
angular.module('mean.system', []);
angular.module('mean.articles', []);
