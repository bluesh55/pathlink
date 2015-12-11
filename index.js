var _ = require('underscore');
var pathList ={}

module.exports = {
  config: function(routes) {
    pathList = routes;
  },

  get: function(pathName, params, query) {
    var i, queries = "";
    var paramsKeys = _.keys(params);
    var queryKeys = _.keys(query);

    var path = pathList[pathName];

    if(params) {
      if(path) {
        for(i = 0; i < paramsKeys.length; i++) {
          var key = paramsKeys[i];
          path = path.replace(":" + key, params[key]);
        }
      } else {
        return null;
      }
    }



    /* Add query to path */

    for(i = 0; i < queryKeys.length; i++) {
      var key = queryKeys[i];

      if(i == 0)
        queries += "?";

      queries += key;
      queries += "=";
      queries += query[key];

      if(i != queryKeys.length - 1) {
        queries += "&";
      }
    }

    path += queries;

    return path;
  }
};
