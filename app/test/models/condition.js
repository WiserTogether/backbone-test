define(['underscore', 'backbone', 'json!test/data/aneurysm.json'], function(_, Backbone, data) {
var Condition = Backbone.Model.extend({

  defaults: {
    name: ''
  },

  fetch: function(options) {
    if (!this.set(data, options)) {
      return false;
    }
    if (options != null) {
      if (typeof options.success === "function") {
        options.success(this);
      }
    }
  },

  save: function(options) {
    if (options != null) {
      if (typeof options.success === "function") {
        options.success(this);
      }
    }
    return false;
  }

});

return new Condition;
});
