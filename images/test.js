jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            //autoplayTimeout: 4000,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});




$('#testimonial').ready(function () {
  //rotation speed and timer
  var speed = 5000;
  
  var run = setInterval(rotate, speed);
  var textSlides = $('.textslide');
  var textContainer = $('#textslides ul');
  var elm = textContainer.find(':first-child').prop("tagName");
  var item_width = textContainer.width();
  var textPrevious = 'textprev'; //id of previous button
  var textNext = 'textnext'; //id of next button
  textSlides.width(item_width); //set the slides to the correct pixel width
  textContainer.parent().width(item_width);
  textContainer.width(textSlides.length * item_width); //set the slides container to the correct total width
  textContainer.find(elm + ':first').before(textContainer.find(elm + ':last'));
  resetSlides();
  
  
  //if user clicked on prev button
  
  $('#buttons a').click(function (e) {
    //slide the item
    
    if (textContainer.is(':animated')) {
      return false;
    }
    if (e.target.id == textPrevious) {
      textContainer.stop().animate({
        'left': 0
      }, 1500, function () {
        textContainer.find(elm + ':first').before(textContainer.find(elm + ':last'));
        resetSlides();
      });
    }
    
    if (e.target.id == textNext) {
      textContainer.stop().animate({
        'left': item_width * -2
      }, 1500, function () {
        textContainer.find(elm + ':last').after(textContainer.find(elm + ':first'));
        resetSlides();
      });
    }
    
    //cancel the link behavior      
    return false;
    
  });
  
  //if mouse hover, pause the auto rotation, otherwise rotate it  
  textContainer.parent().mouseenter(function () {
    clearInterval(run);
  }).mouseleave(function () {
    run = setInterval(rotate, speed);
  });
  
  
  function resetSlides() {
    //and adjust the container so current is in the frame
    textContainer.css({
      'left': -1 * item_width
    });
  }
  
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
  $('#textnext').click();
}
	

