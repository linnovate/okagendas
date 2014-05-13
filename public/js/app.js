angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'dx', 'ezfb'])
.run(function (ezfb) {
  ezfb.init({
    appId: '102113249964274'
  });  
});
angular.module('mean.system', []);
angular.module('mean.articles', []);
