define(['jquery', 'underscore', 'backbone', 'text!test/templates/index.html'], function($, _, Backbone, template) {

var IndexView = Backbone.View.extend({

  template: _.template(template),
  title: "Test Application",
  events: {
    "click a": "navigate"
  },

  render: function() {
    document.title = this.title;
    this.$el.html(this.template({
      title: this.title
    }));
    return this;
  },

  navigate: function(e) {
    if (e != null) {
      e.preventDefault();
    }
    Backbone.history.navigate($(e.currentTarget).attr('href'), true);
  }
});

return IndexView;
});