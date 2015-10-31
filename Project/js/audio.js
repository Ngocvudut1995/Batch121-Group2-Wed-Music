

$(document).ready(function(){
    var btn = {
        play  : $('#play'),
        pause  : $('#pause'),
        prev : $('#prev'),
        next  : $('#next'),
        stop  : $('#stop'),
        muteon  : $('#muteon'),
        muteoff :$('#muteoff'),
        vol	: 	$('#vol')
    }
    ul_playlist = $('.playlist');

        create_playlist(playlist, ul_playlist);

        song 	= new Audio();
        song.type= 'audio/mpeg';
        song.volume = btn.vol.val()/100;


        i = ul_playlist.find('.active').data('idx');

        songPlayIndex(i,playlist,song);

        control_player(song, btn, playlist, ul_playlist);


});
function create_playlist(list,ele) {
    html = '';
    var t = 1;
    $.each(list, function (index, val) {
        var s = "";


        s += '<li class="list-group-item" data-idx="' + index + '">'
        s += '     <p style="margin-left: 15px"><span>' + t + '</span> ' + val.tenbaihat + '</p>';
        s += '</li>'
        t++;
        html += s;

    });
    $(ele).html(html);

//   d += '<li data-idx="'+index+'"><a href="">'+val.tenbaihat+'</a></li>';
    //  });

    // ele.empty().append(html);
    ele.find('li').first().addClass('active');
    $(document).ready(function() {

        $("#PL li").bind('mouseenter', function () {
            $(this).css('background-color','#C8C8C8');




        }).bind('mouseleave', function () {
            $(this).css('background-color','white');

        });
    });

}
function songPlayIndex(i,l,s) {
    var str='url("'+l[i].hinhanh+'")';
   $('.hinhanh').css('background-image',str);
   $('.baihat').text(l[i].tenbaihat);
   $('.trinhbay').text(l[i].trinhbay);
    $('.tieude').text('Bài Hát: '+l[i].tenbaihat+' - '+l[i].trinhbay);
    $('#show1').html(l[i].verse);
    s.src = l[i].url;
    s.play();
}