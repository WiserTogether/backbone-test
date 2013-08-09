define(['jquery', 'underscore', 'backbone', 'test/models/condition', 'test/views/index', 'test/views/condition'],
  function($, _, Backbone, aneurysm, IndexView, ConditionView) {
/*
  Backbone navigation router class. Handles url change events

  - `routes` - dictionary-like object with route[String]:handler[String] structure
*/

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'slug(/)': 'condition',
    '*actions': 'index'
  },

  /*
      Router initialization. Defines needed variables: `commonView`, `playerView`, `indexView`, `addToPlaylistView`.

      Resets all routes. Starts Backbone.history.
  */
  initialize: function(options) {
    this.autoResetRoutes();
    Backbone.history.start({
      pushState: false
    });
  },

  autoResetRoutes: function() {
    var _this = this;
    _(this.routes).each(function(destination) {
      _(_this.routes).each(function(other) {
        if (destination !== other) {
          _this.on("route:" + destination, _this["reset_" + other], _this);
        }
      });
    });
  },

  index: function() {
    this.indexView = new IndexView;
    $('body').append(this.indexView.render().el);
  },

  reset_index: function() {
    /* Hide index here
    */
    if (this.indexView != null) {
        this.indexView.remove();
    }
  },

  condition: function() {
    this.conditionView = new ConditionView({
      model: aneurysm
    });
    $('body').append(this.conditionView.render().el);

    if (!aneurysm.get('name')) {
      aneurysm.fetch();
    }
  },

  reset_condition: function() {
    if (this.conditionView != null) {
        this.conditionView.remove();
    }
  }

});

return new Router;
});
