({
    name: "main",
    out: "../build/test-app.js",
    baseUrl: ".",
    stubModules: ['cs', 'text'],
    exclude: ['coffee-script'],
    preserveLicenseComments: false,
    optimize: "none",
    paths: {
      "text"               : "libs/text",
      "cs"                 : "libs/cs",
      "json"               : "libs/json",
      "domReady"           : "libs/domReady",
      'coffee-script'      : 'libs/coffee-script',
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
