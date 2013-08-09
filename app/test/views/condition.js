define(['jquery', 'underscore', 'backbone', 'text!test/templates/condition.html', 'text!test/templates/treatment.html'],
  function($, _, Backbone, template, treatTemplate) {

var TreatmentView = Backbone.View.extend({

  tagName: 'li',
  template: _.template(treatTemplate),

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }
});

var TreatmentsView = Backbone.View.extend({

  tagName: 'ul',

  render: function() {
    this.$el.empty();
    _.each(this.model.get('treatments'), this.addOne, this);
    return this;
  },

  addOne: function(treat) {
    this.$el.append(new TreatmentView({
      model: treat
    }).render().el);
  }
});

var ConditionView = Backbone.View.extend({

  template: _.template(template),

  initialize: function(options) {
    ConditionView.__super__.initialize.call(this, options);
    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    document.title = this.model.get('name');

    this.$el.html(this.template(this.model.attributes));
    this.$('div').append(new TreatmentsView({
      model: this.model
    }).render().el);
    return this;
  }
});

return ConditionView;
});
