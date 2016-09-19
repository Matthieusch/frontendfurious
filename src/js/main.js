var app;

(function() {
  'use strict';

  var document,
      $ = jQuery.noConflict();

  var s;
  app = {

    settings: {
      // Properties
      version: '1.0.0',
      author: 'http://matthieu-schneider.fr/',
      timerStart: Date.now(),

      // Debug
      debug: true,
      debugLoadMessages: [],
      debugEventMessages: []
    },

    // Initialisation
    init: function() {
      var self = this,
          s = self.settings;

      if(s.debug) console.log('%cInformations\nversion: '+s.version + '\nauthor: ' + s.author, 'color: #1d1717');

      // Calculate time to load DOMready and everything loaded
      $(document).ready(function() {
        if(s.debug) console.log('%cTime until DOMready: ' + (Date.now()-s.timerStart)/1000+'sec', 'color: #ad0040');
      });

      $(window).load(function() {
        if(s.debug) console.log('%cTime until everything loaded: ' + (Date.now()-s.timerStart)/1000+'sec', 'color: #ad0040');

        // All is loaded
        self.loaded();
      });

      // WOW
      new WOW().init();

      // Lazy loading
      $('.async').Lazy({
        threshold: 50,
        effect: 'fadeIn',
        effectTime: 750
      });
    },

    // All is loaded
    loaded: function(){

      var self = this;

      self.smoothScrolling();

    },

    // debugEvent
    console: function(messages) {
      var self = this,
          s = self.settings;

      if(s.debug){
        var date = new Date();

        s.debugEventMessages.push(messages);

        console.clear();

        console.log('%cEvent - '+date.getHours()+'h'+date.getMinutes()+'mn'+date.getSeconds()+'s', 'color: #655a54');
        for(var key in s.debugEventMessages){
          if(typeof s.debugEventMessages[key] === 'object'){
            console.log(s.debugEventMessages[key]);
          } else {
            console.log('%c→ '+s.debugEventMessages[key], 'color: #ad9d91');
          }
        }
        console.log('%cEnd', 'color: #655a54');
      } else {
        return;
      }
    },

    smoothScrolling: function () {
      $('a[href*=#]:not([href=#])').bind('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
          var target = $(this.hash);

          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }

  };

  app.init();
})();