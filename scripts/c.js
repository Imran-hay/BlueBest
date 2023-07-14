(function() {
  var circularCarousal = {
    init: function() {
      _this = this;
      _this.order = [];
      _this.images = document.getElementsByClassName('circular-carousal--image');
      for (var i = 0; i < _this.images.length; i++) {
        _this.images[i].addEventListener('click', function(event) {
          _this.rotate(event);
        });
      }
      _this.process();
    },
    process: function() {
      var totalImages, leftImageIndex, centerImageIndex, rightImageIndex;
      totalImages = _this.images.length;
      centerImageIndex = (totalImages % 2 == 0) ? (totalImages / 2) : Math.ceil(totalImages / 2);
      centerImageIndex--;
      leftImageIndex = centerImageIndex - 1;
      rightImageIndex = centerImageIndex + 1;
      for (var i = 0; i < leftImageIndex; i++) {
        _this.order[i] = 'far-left';
      }
      for (var i = rightImageIndex; i < _this.images.length; i++) {
        _this.order[i] = 'far-right';
      }
      _this.order[centerImageIndex] = 'center';
      _this.order[leftImageIndex] = 'left';
      _this.order[rightImageIndex] = 'right';
      _this.render();
      
    },
    render: function() {
      for (var i = 0; i < _this.images.length; i++) {
        _this.order.forEach(function(element, index) {
          console.log(_this.images);
          _this.images[i].classList.remove(element);
        })
        _this.images[i].classList.add(_this.order[i]);
      }
    },
    rotate: function(event) {
      var clickedImage = event.currentTarget;
      if (clickedImage.classList.contains('left')) {
        _this.order.push(_this.order.shift());
      }
      if (clickedImage.classList.contains('right')) {
        _this.order.unshift(_this.order.pop());
      }
      _this.render();
    }
  };
  circularCarousal.init();
})();





(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 


/*for color on hover*/
function _toArray(arr) { 
  return Array.isArray(arr) ? arr : Array.from(arr)
}

function makeSpans (selector) {
  var _document$querySelect = document.querySelectorAll(selector)
  var _document$querySelect2 = _toArray(_document$querySelect)
  var elements = _document$querySelect2.slice(0)
  
  return elements.map(function (element) {
    var text = element.innerText.split('')
    var spans = text.map(function (letter) {
      return '<span>' + letter + '</span>'
    }).join('')
    return element.innerHTML = spans
  })
}

makeSpans('p')




function cbg()
{
  const x = document.getElementById("cbg");
  x.classList.add("box");

}

function cw()
{
  var w = window.innerWidth;
  var c = document.getElementById("ct");

  if (w > 800 )
  {
    c.style.paddingTop= "10px";
  }

}


//background


