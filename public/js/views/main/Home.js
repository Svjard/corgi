/*global define*/
define(
  ['marionette','templates', 'vent'],
  function (Marionette, templates, vent) {
    'use strict';

    return Marionette.Layout.extend({
      template: templates.home,
      regions: {
        header: '#header',
        content: '#content'
      },
      initialize: function() {
      	//$(window).on('resize.profile', _.bind(this.resize, this));
      },
      onClose: function() {
		    //$(window).off('resize.profile');
      },
      onShow: function() {
        //this.resize();
      },
      resize: function() {
        // TODO
      }
    });
  }
);

