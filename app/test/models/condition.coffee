define [
  'underscore'
  'backbone'

  'json!test/data/aneurysm.json'
], (_, Backbone, data) ->

  class Condition extends Backbone.Model
    defaults:
      name: ''

    fetch: (options) ->
      if not @set(data, options)
        return false

      options?.success?(@)

    save: (options) ->
      options?.success?(@)
      false

  new Condition