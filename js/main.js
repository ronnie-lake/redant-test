$(function() {
	$('.gallery__left-arrow').click(function() {
		var arrow = $(this);
		var parent = arrow.parents('.gallery');
		var active = parent.find('.gallery__list-item_active');
		active.removeClass('gallery__list-item_active');
		active.prev().addClass('gallery__list-item_active');
		var src = active.prev().find('img').attr('src');
		parent.find('.gallery__main-photo').attr('src', src);
	});

	$('.gallery__right-arrow').click(function() {
		var arrow = $(this);
		var parent = arrow.parents('.gallery');
		var active = parent.find('.gallery__list-item_active');
		active.removeClass('gallery__list-item_active');
		active.next().addClass('gallery__list-item_active');
		var src = active.next().find('img').attr('src');
		parent.find('.gallery__main-photo').attr('src', src);
	});

	$('.gallery__list-item').click(function() {
		var item = $(this);
		var src = item.find('img').attr('src');
		var parent = item.parents('.gallery');
		parent.find('.gallery__main-photo').attr('src', src);
		item.siblings('.gallery__list-item_active').removeClass('gallery__list-item_active');
		item.addClass('gallery__list-item_active');
	});

	$('.form__item').on('keyup', function() {
		var input = $(this);
		var label = input.next();
		if (input.val() == '') {
			label.show();
		} else {
			label.hide();
		}
	});

});

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker1 = new google.maps.Marker({
          position: {lat: -20.463, lng: 131.044},
          map: map,
          icon: '../img/education.png'
        });
        var marker2 = new google.maps.Marker({
          position: {lat: -26.363, lng: 132.144},
          map: map,
          icon: '../img/entertainment.png'
        });
        var marker3 = new google.maps.Marker({
          position: {lat: -30.563, lng: 133.244},
          map: map,
          icon: '../img/health.png'
        });
        var marker4 = new google.maps.Marker({
          position: {lat: -35.663, lng: 134.344},
          map: map,
          icon: '../img/sport.png'
        });
        var marker5 = new google.maps.Marker({
          position: {lat: -38.763, lng: 135.444},
          map: map,
          icon: '../img/trading.png'
        });
}