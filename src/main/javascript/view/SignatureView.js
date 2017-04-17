'use strict';

SwaggerUi.Views.SignatureView = Backbone.View.extend({
  events: {
    'mousedown .snippet': 'snippetToTextArea',
    'click  h4.sample-title': 'toggleIcon',
    'click  h4.schema-title': 'toggleIcon'
  },

  initialize: function () {
  },

  render: function () {
    $(this.el).html(Handlebars.templates.signature(this.model));
    this.isParam = this.model.isParam;
    return this;
  },

  // handler for snippet to text area
  snippetToTextArea: function (e) {
    if (this.isParam) {
      // if (e) {
      //   e.preventDefault();
      // }

      var textArea = $('textarea', $(this.el.parentNode.parentNode.parentNode));
      if ($.trim(textArea.val()) === '') {
        textArea.val(this.model.sampleJSON);
         // TODO move this code outside of the view and expose an event instead
         if( this.model.jsonEditor && this.model.jsonEditor.isEnabled()){
            this.model.jsonEditor.setValue(JSON.parse(this.model.sampleJSON));
         }
      }
    }
  },

  // handler for changing arrow icon
  toggleIcon: function (e) {
    var iconId = e.currentTarget.attributes['data-toggle'].ownerElement.children[0];

    if ($(iconId).hasClass('glyphicon-menu-right')) {
      $(iconId).removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
    } else {
      $(iconId).removeClass('glyphicon-menu-down').addClass('glyphicon glyphicon-menu-right');
    }
  }
});
