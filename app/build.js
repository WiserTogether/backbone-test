({
    name: "main",
    out: "../build/test-app.js",
    baseUrl: ".",
    stubModules: ['text'],
    preserveLicenseComments: false,
    optimize: "none",
    paths: {
      "text"               : "libs/text",
      "json"               : "libs/json",
      "domReady"           : "libs/domReady",
      'jquery'             : 'libs/jquery-1.10.2',
      'backbone'           : 'libs/backbone',
      'underscore'         : 'libs/underscore',
      "requireLib"         : "libs/require"
    },
    shim: {
      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },
      'underscore': {
          exports: '_'
      }
    },
    include: "requireLib"
})
