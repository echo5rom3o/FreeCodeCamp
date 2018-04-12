$(document).ready(function(e) {

	var lat, long, tempF, location, descript;

	function getLocation() {

		function success(position){
			lat = position.coords.latitude.toString();
			long = position.coords.longitude.toString();
		}

		function error(failed){
			console.log(failed);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success);
		} else {
			console.log('Geolocation is not supported for this Browser/OS.');
		}
	}

	function checkWeather (){
		var url = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + lat + "&" + "lon=" + long;
		$.ajax({
			url: url,
			success: function(data){
				$('#loc').text(data.name + ", " + data.sys.country);
				descript = data.weather[0].description;
				$('#desc').text(descript.toUpperCase());
				$('#conLabel').css('display', '');
				$('#tempLabel').css('display', '');
				tempF = Math.floor(data.main.temp * 1.8 + 32);
				$('#temp').text(tempF + String.fromCharCode(176) + "F");
				getIcon(descript);
			}
		})
	}

	function getIcon(info){
		console.log(info);
		if (info == 'scattered clouds'){
			$('icon').addClass('wi-day-rainy');
		}
	}

	$("#gpsBtn").click(function(e) {
		e.preventDefault();
		getLocation();
		checkWeather();
	});

});
