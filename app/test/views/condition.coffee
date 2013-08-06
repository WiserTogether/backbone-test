define [
  'jquery'
  'underscore'
  'backbone'

  'text!test/templates/condition.html'
  'text!test/templates/treatment.html'
  
], ($, _, Backbone, template, treatTemplate) ->

  class TreatmentView extends Backbone.View
    tagName: 'li'
    template: _.template(treatTemplate)

    render: ->
      @$el.html @template @model
      @

  class TreatmentsView extends Backbone.View
    tagName: 'ul'

    render: ->
      @$el.empty()
      _.each @model.get('treatments'), @addOne
      @

    addOne: (treat) =>
      @$el.append new TreatmentView(model: treat).render().el

  class ConditionView extends Backbone.View
    template: _.template(template)

    initialize: (options) ->
      super options
      @listenTo(@model, 'change:name', @render)

    #Renders template
    render: ->
      document.title = @model.get('name')
      @$el.html @template @model.attributes
      @$('div').append new TreatmentsView(model: @model).render().el
      @
