define ['underscore'], (_) ->
  # init template engine
  _.templateSettings =
    interpolate : /\{\{(.+?)\}\}/g
    evaluate	: /\{\%(.+?)\%\}/g
