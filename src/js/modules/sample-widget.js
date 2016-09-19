(function() {
  'use strict';

  var $ = jQuery.noConflict();

  var self, s;
  app.SampleWidget = {

    settings: {
      elBody: $('body')
    },

    init: function() {
      self = this;
      s = self.settings;

      self.bindUIActions();
    },

    bindUIActions: function() {

    }
  };

  app.SampleWidget.init();
})();
