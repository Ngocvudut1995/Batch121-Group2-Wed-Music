

function create_playlist(list,ele) {
    html = '';
    var t = 1;
    $.each(list, function (index, val) {
        var s = "";


        s += '<li class="list-group-item"style="height:48px" data-idx="' + index + '">'
        s += '    <div class="col-md-7 col-xs-7 " style="margin-left: 0px;position: absolute"> <p class="namesong-bxh"style="width: 100%;height: 100%"><span>' + t + '</span>.   <a class="playsong"href="#"style="height: 100%;color: black">'+ val.tenbaihat+'</a> - <a href="#">'+val.trinhbay+'</a></p></div>';
        s+='        <div class="col-md-4 col-xs-5 namesong-bxh"style="float: right;">'
        s+='            <a href=""><span class="glyphicon glyphicon-download-alt"style="float: right;margin-left: 20px"></span></a>'
        s+='        <a href=""><span class="glyphicon glyphicon-heart"style="float: right;margin-left: 20px"></span></a>'
        s+='        <a href="#"  ><span class="glyphicon glyphicon-film"style="float: right"></span></a>'
        s+='    </div>'
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
   $('.baihat').html('<a href="'+l[i].detail+'">'+l[i].tenbaihat+'</a>');
   $('.trinhbay').html('<a href="#">'+l[i].trinhbay+'</a>');
    $('.tieude').text('Bài Hát: '+l[i].tenbaihat+' - '+l[i].trinhbay);
    $('#show1').html(l[i].verse);
    s.src = l[i].url;
    s.play();

}