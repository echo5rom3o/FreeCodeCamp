$(document).ready(function() {

	var quote;
	var author;
	var colors = ['#509f74', '#3a3dfb', '#e55692', '#830a58', '#c4c9e6', '#3f64bc', '#b1edbb', '#6c1acc', '#91453d', '#311ba4', '#cd3041', '#4d807c', '#bc73fe', '#24256c', '#1792b8', '#8f3720', '#9228b6', '#9ce641', '#819edd', '#14fab0', '#de220b'];
	var randomNum;
	var randomColor;

	function getQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quoteBlock').text(quote);
				if (author) {
					$('#authorBlock').text('-' + author);
				} else {
					$('#authorBlock').text('- unknown');
				}
			}
		});
	}
	function changeColor(){
		randomNum = Math.floor((Math.random()*colors.length));
		randomColor = colors[randomNum];
		console.log(randomColor);
		$('.changeBg').css('background-color', randomColor);
		$('.changeTx').css('color', randomColor);
	}
	getQuote();
	changeColor();

	$('#nextQuote').on('click', function(e){
		e.preventDefault();
		getQuote();
		changeColor();
	});

	$('#tweet').on('click', function(){
		window.open('https://twitter.com/intent/tweet?text=' + quote + ' -' + author);
	});
});
