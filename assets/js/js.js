
$(document).ready(function () {
        $('.multiple-items').slick({
            infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			centerMode: true,
  			centerPadding: '10px',
  			dots: true,
  			lazyLoad: 'ondemand',
            mobileFirst: true,
            centerMode: true,
            arrows: false,
            infinite: true,
            autoplay: true ,
            autoplaySpeed: 2000,
            pauseOnHover: true,
        });
    });

$(document).ready(function () {
        $('.single-item').slick({
            infinite: true,
  			slidesToShow: 1,
  			centerMode: true,
  			centerPadding: '10px',
  			dots: false,
  			lazyLoad: 'ondemand',
            mobileFirst: true,
            centerMode: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
        });
    });

$(document).ready(function () {
         $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
    
    });

// -----------------------------------------------------------------

function show1(){
  if(document.getElementById("checkVet").checked == true)
  {
      document.getElementById('souVet').style.display ='flex';
  }
  else
  {
     document.getElementById('souVet').style.display = 'none';
  }
}

(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

})(document);




