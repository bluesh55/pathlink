var _ = require('underscore');
var pathList ={}

module.exports = {
  config: function(routes) {
    pathList = routes;
  },

  get: function(pathName, params) {
    var i;
    var keys = _.keys(params);
    var path = pathList[pathName];

    if(params) {
      if(path) {
        for(i = 0; i < keys.length; i++) {
          var key = keys[i];
          path = path.replace(":" + key, params[key]);
        }

        return path;
      } else {
        return null;
      }
    } else {
      return pathList[pathName]
    }
  }
};
