define [
  'jquery'
  'underscore'
  'backbone'

  'text!templates/index.html'
  
], ($, _, Backbone, template) ->

  class IndexView extends Backbone.View
    template: _.template(template)
    title: "Test Application"

    events:
      "click a": "navigate"

    #Renders template
    render: ->
      document.title = @title

      @$el.html @template title: @title
      @

    navigate: (e) ->
      e?.preventDefault()
      Backbone.history.navigate($(e.currentTarget).attr('href'), true)
