define [
  'jquery'
  'underscore'
  'backbone'
  
  'cs!models/condition'

  'cs!views/index'
  'cs!views/condition'

], ($, _, Backbone, aneurysm, IndexView, ConditionView) ->

  ###
  Backbone navigation router class. Handles url change events

  - `routes` - dictionary-like object with route[String]:handler[String] structure
  ###
  class Router extends Backbone.Router
    routes:
      '': 'index'
      'slug(/)': 'condition'
      '*actions': 'index' # Default

    ###
    Router initialization. Defines needed variables: `commonView`, `playerView`, `indexView`, `addToPlaylistView`.

    Resets all routes. Starts Backbone.history.
    ###
    initialize: (options) ->
      @autoResetRoutes()

      Backbone.history.start
        pushState: false

    # Closes all views except the one shown currently.
    autoResetRoutes: ->
      _(@routes).each (destination) => 
        _(@routes).each (other) =>
          if (destination isnt other)
            @on("route:#{destination}", @["reset_#{other}"], @)

    #Handles index view route.
    index: ->
      @indexView = new IndexView
      $('body').append @indexView.render().el

    # hides index view
    reset_index: ->
      ### Hide index here ###
      @indexView?.remove()

    # Aneurysm detail route handler.
    condition: ->
      @conditionView = new ConditionView {model: aneurysm}
      $('body').append @conditionView.render().el

      if not aneurysm.get('name')
        aneurysm.fetch()

    # Removes album detail page view
    reset_condition: ->
      @conditionView?.remove()


  new Router

