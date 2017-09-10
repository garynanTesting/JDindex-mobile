function searchBox () {
	var oTarget = $('.nav_box')[0];
	var target = oTarget.offsetTop;

	$(window).scroll( function () {
		var scrollTop = $(document).scrollTop();
		var scale = ( scrollTop/target );
		if ( scale >= 0.9 ){
			scale = 0.9;
		}

		$('.search_box').css( 'backgroundColor' , 'rgba(224,47,49,'+scale+')' );
	} );
}

function jdLimit (){
	var oDeadLine = new Date('2017/07/5 18:49:00');
	
	function counter(){
		var oDateNow = new Date ();
		var target = oDeadLine - oDateNow;
		
		var countHours = parseInt(target/1000/60/60);
		if(countHours < 10) countHours = '0' + countHours ;

		var countMinutes = parseInt(target/1000/60%60);
		if(countMinutes < 10) countMinutes = '0' + countMinutes ;

		var countSeconds = parseInt(target/1000%60);
		if(countSeconds < 10) countSeconds = '0' + countSeconds ;

		if(target<1) {
			clearInterval(timer);
			$('#deadline_hours').html('00');
			$('#deadline_minutes').html('00');
			$('#deadline_seconds').html('00');
		}else{
			$('#deadline_hours').html(countHours);
			$('#deadline_minutes').html(countMinutes);
			$('#deadline_seconds').html(countSeconds);
		}
	}

	counter();
	var timer = setInterval(counter,1000);
}