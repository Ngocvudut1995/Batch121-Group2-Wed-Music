function control_player(song,button,list,ul) {
	button.play.on('click', function(e) {
		e.preventDefault();



			song.play();

	});
	button.pause.on('click',function(e){
		e.preventDefault();
		song.pause();
	});
	button.stop.on('click', function(e) {
		e.preventDefault();
		button.play.changeClass('pause','play');
		song.pause(); song.currentTime = 0;
	});

	var volmoment=button.vol.val();
	button.muteon.on('click', function(e){
		volmoment=button.vol.val();
		e.preventDefault();
		song.volume=0;
		button.vol.val(0);
	});
	button.muteoff.on('click', function(e){
		e.preventDefault();
		button.vol.val(volmoment);
		song.volume=volmoment/100;

	});
	button.vol.change(function(e) {
		song.volume = ($(this).val())/100;
		$('#vol-fill').css('width', $(this).val() + '%');
		if(song.volume==0){
			$('#muteoff').show();
			$('#muteon').hide();
		}
		if(song.volume>0){
			$('#muteoff').hide();
			$('#muteon').show();
		}
	});

	var secondsToTime = function( secs ) {
		var hours = Math.floor(secs / 3600), minutes = Math.floor(secs % 3600 / 60), seconds = Math.ceil(secs % 3600 % 60);
		return ( hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0' + hours + ':' : hours + ':' ) + ( minutes.toString().length < 2 ? '0' + minutes : minutes ) + ':' + ( seconds.toString().length < 2 ? '0' + seconds : seconds );
	}

	song.addEventListener('timeupdate',function (){
		per = (song.currentTime/song.duration)*100;

		if(per == 100){
			$('.fill').css({'width': '0%'});
			i = ul.find('li.active').removeClass('active').next().addClass('active').data('idx');
			if(i>=list.length){ i=0;return }
			songPlayIndex(i,list,song);
		}else{
		//	var t=round(song.currentTime);
			$('.fill').css({'width': per + '%'});
			$('#currenttime').text(secondsToTime(song.currentTime));
			$('#time').text(secondsToTime(song.duration));
			$('#seek').val(per);
			$('#seek').attr('value', per);

		}
	/*	if(per == 100){
			$('.fill').css({'width': '0%'});
			$('#seek').attr('value',0);
			song.play();
		}else{
			$('.fill').css({'width': per + '%'});
			$('#seek').attr('value', per);
		}*/
	});

	$('#seek').click(function(event) {
		time = ($(this).val()/100)*song.duration;
		song.currentTime = time;
	});

	ul.on('click','.playsong', function(e) {
		e.preventDefault();
		ul.find('li.active').removeClass('active');
		$('#play').hide();
		$('#pause').show();
		$(this).parents('li').addClass('active');
		i = $(this).parents('li').data('idx');
		songPlayIndex(i,list,song);
	});

	button.prev.on('click', function(e) {
		e.preventDefault();
		$('#play').hide();
		$('#pause').show();
		if(i==0){ songPlayIndex(i,list,song);}
		else{
			i = ul.find('li.active').removeClass('active').prev().addClass('active').data('idx');

			songPlayIndex(i,list,song);
		}
	});

	button.next.on('click', function(e) {
		e.preventDefault();
		$('#play').hide();
		$('#pause').show();
		i = ul.find('li.active').removeClass('active').next().addClass('active').data('idx');
		if(i>=list.length){ return }
		songPlayIndex(i,list,song);
	});

}

$.fn.changeClass = function(before, after) {
	$(this).find('i').removeClass(before).addClass(after);
}

	$(document).ready(function(){

		$('#play').hide();
		$('#play').click(function(){

			$(this).hide();
			$('#pause').show();
		});
		$('#pause').click(function () {

			$(this).hide();
			$('#play').show();
		});
		$('#muteoff').hide();
		$('#muteoff').click(function(){

			$(this).hide();
			$('#muteon').show();
		});
		$('#muteon').click(function () {

			$(this).hide();
			$('#muteoff').show();
		});


	});
$(document).ready(function() {

	$("#PL li").bind('mouseenter', function () {
		$(this).css('background-color','#C8C8C8');




	}).bind('mouseleave', function () {
		$(this).css('background-color','white');

	});
});
