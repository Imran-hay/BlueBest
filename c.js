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

