require(['underscore'], function(_){
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,
    evaluate: /\{\%(.+?)\%\}/g
  };
});

require(['underscore', 'test/router']);
