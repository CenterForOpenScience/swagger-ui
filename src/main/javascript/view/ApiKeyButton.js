'use strict';

SwaggerUi.Views.ApiKeyButton = Backbone.View.extend({ // TODO: append this to global SwaggerUi

  events:{
    'click #apikey_button' : 'toggleApiKeyContainer',
    'click #apply_api_key' : 'applyApiKey',
    'click #clear-token-link': 'removeApiKey'
  },

  initialize: function(opts){
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function(){
    var template = this.template();
    $(this.el).html(template(this.model));
    return this;
  },

  applyApiKey: function(){
    var key = encodeURIComponent($('#input_apiKey_entry')[0].value);
    if (key && key.trim() != "") {
      var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization("Authorization", "Bearer " + key, "header");
      this.router.api.clientAuthorizations.add("key", apiKeyAuth);
      $('.token-indicator').removeClass("hidden");
      $('.osf-token-info').addClass("hidden");
      $('.put-post-patch-try').removeClass("hidden");
      $('.put-post-patch-info').addClass("hidden");
    } else {
      this.removeApiKey();
    }
    $('#apikey_container').show();
  },

  toggleApiKeyContainer: function(){
    if ($('#apikey_container').length) {

      var elem = $('#apikey_container').first();
      var button = $('#apikey_menu_icon');

      if (elem.is(':visible')){
        elem.hide();
        button.removeClass("glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");

      } else {
        button.removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");

        // hide others
        $('.auth_container').hide();
        elem.show();
      }
    }
  },

  template: function(){
    return Handlebars.templates.apikey_button_view;
  },

  removeApiKey: function() {
    this.router.api.clientAuthorizations.remove("key");
    $('#input_apiKey_entry')[0].value = '';
    $('.token-indicator').addClass("hidden");
    $('.osf-token-info').removeClass("hidden");
    $('.put-post-patch-try').addClass("hidden");
    $('.put-post-patch-info').removeClass("hidden");
  }

});
