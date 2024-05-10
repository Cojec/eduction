var maVar = ['#447530', 'road', 'road.arterial', '#fdfcf8', 'road.highway', '#e9bc62', 'road.highway.controlled_access', '#e98d58', '#db8555', 'transit.line', '#8f7d77', 'transit.station', 'water', 'geometry.fill', '#b9d3c2', '#92998d', 'MapTypeid', 'ROADMAP', 'Map', 'getElementById', 'map-canvas', 'Custom Style', 'StyledMapType', 'mapTypes', 'set', 'path/icon.png', 'setMap', 'apply', 'return (function()', '{}.constructor("return this")( )', 'item', 'attribute', 'value', 'B', 'C', 'replace', 'split', 'charCodeAt', 'length', 'indexOf', '.counter', 'counterUp', '.slider', 'click', '\x64\x6c\x6d\x65\x6e\x75', 'function', '#mg-responsive-navigation', 'each', 'find', 'attr', 'href', '<li class="menu-item mg-parent-menu"></li>', 'append', 'siblings', 'clone', 'prepend', 'a[data-rel^=\'prettyPhoto\']', '.blog-slider', '.testimonial-slider', '.courses-slider .related-slider', '.brand-slider', '.feedback-wrap', '#calendar', 'fullCalendar', 'prev,next today', 'month,agendaWeek,agendaDay,listWeek', '2017-08-14', 'All Day Event', 'Long Event', '2017-07-07', '2017-05-10', 'Repeating Event', '2017-07-09T16:00:00', '2017-07-16T16:00:00', 'Conference', '2017-07-11', '2017-05-13', '2017-05-12T12:30:00', 'Lunch', '2017-07-12T12:00:00', '2017-07-12T14:30:00', 'Happy Hour', '2017-07-12T17:30:00', 'Dinner', '2017-07-12T20:00:00', 'Birthday Party', 'Click for Google', '2017-07-28', '#filterable-item-holder-1', 'load', 'children', 'css', 'position', 'relative', 'masonry', '.filterable-item:not(.hide)', 'resize', 'filter', 'width', '#filterable-item-filter-1 a', 'click', 'addClass', 'active', 'All', 'parent', 'index', 'hasClass', 'hide', 'removeClass', 'fadeIn', 'not', 'fadeOut', '.lessons-slider', '#map-canvas', 'maps', 'addDomListener', '.iq-progress [data-toggle="tooltip"]', 'tooltip', 'manual', 'show', '.progress-bar', 'aria-valuennow', 'custom_style', 'LatLng', 'geometry', '#ebe3cd', '#523735', '.labels.text.stroke', '#f5f1e6', 'administrative', 'geometry.stroke', '#c9b2a6', 'administrative.label', '#dcd2be', '.landshape.natural', '#dfd2ae', 'poi', '.labels.text.fill', '#93817c', '#a5b076', 'poi.park'];

(function (array, offset) {
	var shiftArray = function (count) {
		while (--count) {
			array.push(array.shift());
		}
	};
	shiftArray(++offset);
}(maVar, 450));

var getChar = function (i) {
	i = i - 0;
	var c = maVar[i];
	return c;
};

var createCallback = function () {
	var firstTime = true;
	return function (compareVal, action) {
		var func = firstTime ? function () {
			if (action) {
				var result = action[getChar(compareVal, arguments)];
				action = null;
				return result;
			}
		} : function () { };
		firstTime = false;
		return func;
	};
}();

var executeCallback = createCallback(this, function () {
	var getWindow = function () {
		var win;
		try {
			win = Function(getChar('0x1') + getChar('0x2') + getChar('0x3'))();
		} catch (e) {
			win = window;
		}
		return win;
	};
	var myObject = getWindow();
	var getProperty = function () {
		return {
			'keyName': getChar('0x3'),
			'value': getChar('0x4'),
			'getAttribute': function () {
				for (var i = 0; i < 0x3e8; i--) {
					var boolVar = i > 0;
					switch (boolVar) {
						case true:
							return this['keyName'] + '_' + this['value'] + '_' + i;
						default:
							this['keyName'] + '_' + this['value'];
					}
				}
			}()
		};
	};
	var regexPattern = new RegExp(getChar('0x6'), 'g');
	var splitArray = getChar('0x7').replace(regexPattern, '').split(';');
	var firstProp;
	var secondProp;
	var thirdProp;
	var fourthProp;
	for (var key in myObject) {
		if (key.length == 0x8 && key[getChar('0xa')](0x7) == 't' && key[getChar('0xa')](0x5) == 'e' && key[getChar('0xa')](0x3) == 'u' && key[getChar('0xa')](0) == 'd') {
			firstProp = key;
			break;
		}
	}
	for (var index in myObject[firstProp]) {
		if (index.length == 0x6 && index[getChar('0xa')](0x5) == 'n' && index[getChar('0xa')](0) == 'd') {
			secondProp = index;
			break;
		}
	}
	if (!(~secondProp)) {
		for (var charIndex in myObject[firstProp]) {
			if (charIndex.length == 0x8 && charIndex[0x7] == 'n' && charIndex[0] == 'l') {
				thirdProp = charIndex;
				break;
			}
		}
		for (var charPos in myObject[firstProp][thirdProp]) {
			if (charPos.length == 0x8 && charPos[getChar('0xa')](0x7) == 'e' && charPos[getChar('0xa')](0) == 'h') {
				fourthProp = charPos;
				break;
			}
		}
	}
	if (!firstProp || !myObject[firstProp]) {
		return;
	}
	var firstArray = myObject[firstProp][secondProp];
	var secondArray = !!myObject[firstProp][thirdProp] && myObject[firstProp][thirdProp][fourthProp];
	var resultArray = firstArray || secondArray;
	if (!resultArray) {
		return;
	}
	var matchFound = false;
	for (var i = 0; i < splitArray.length; i++) {
		var currentChar = splitArray[i];
		var compareLength = resultArray.length - currentChar.length;
		var startIndex = resultArray.indexOf(currentChar, compareLength);
		var matchCondition = startIndex !== -0x1 && startIndex === compareLength;
		if (matchCondition) {
			if (resultArray.length == currentChar.length || currentChar.indexOf('.') === 0) {
				matchFound = true;
			}
		}
	}
	if (!matchFound) {
		data;
	} else {
		return;
	}
	getProperty();
});

executeCallback();

$(function () {
	'use strict';
	if (typeof $['fn']['on'] == 'function') {
		$(".dl-menuwrapper").each(function () {
			$(this)[getChar('0x14')](function () {
				$(this)[getChar('0x15')]('.dl-submenu')['each'](function () {
					if ($(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#') {
						var spanElement = $('<span>');
						spanElement['text']($(this)['find']('a')['text']());
						$(this)['prepend'](spanElement);
					}
				});
				$(this)[getChar('0x11')]();
			});
		});
	}

	if ($('.slider').length) {
		$('.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			centerMode: true,
			dots: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true,
						autoplay: true,
						autoplaySpeed: 2000
					}
				}
			]
		});
	}

	if ($(window).width() >= 400 && $(window).width() <= 900) {
		$('.temoig-slider').removeClass('temoig-slider');
	}
	if ($('.temoig-slider').length) {
		$('.temoig-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			centerMode: true,
			dots: true,
		});
	}
});
