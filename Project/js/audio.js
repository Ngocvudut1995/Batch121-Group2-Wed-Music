
function create_playlist(list,ele,mylist) {
    html = '';
    var t = 1;
    $.each(list, function (index, val) {
        var s = "";
        var d=0;


        s += '<li class="list-group-item"style="height:48px" data-idx="' + index + '">'
        s += '    <div class="col-md-7 col-xs-7 " style="margin-left: 0px;position: absolute"> <p class="namesong-bxh"style="width: 100%;height: 100%"><span>' + t + '</span>.   <a class="playsong"href="#"style="height: 100%;color: black">'+ val.tenbaihat+'</a> - <a href="#">'+val.trinhbay+'</a></p></div>';
        s+='        <div class="col-md-4 col-xs-5 namesong-bxh"style="float: right;">'
        s+='            <a href="'+val.url+'"><span class="glyphicon glyphicon-download-alt"style="float: right;margin-left: 20px"></span></a>'
        $.each(mylist,function(index2,item){
            if(val.id==item.id){
                s+='        <a class="addmylist" id="'+val.id+'" href="#add" title="Bạn đã thích bài hát này" data-name="'+val.tenbaihat+'" data-src="'+val.hinhanh+'" data-singer="'+val.trinhbay+'" data-url="'+val.url+'" data-verse="'+val.verse+'" ><span class="glyphicon glyphicon-heart"style="float: right;margin-left: 20px;color: red;"></span></a>'
                d=1;
                return false;
            }

        });
        if(d==0){
            s+='        <a class="addmylist" id="'+val.id+'" href="#add" title="Thêm vào playlist của bạn" data-name="'+val.tenbaihat+'" data-src="'+val.hinhanh+'" data-singer="'+val.trinhbay+'" data-url="'+val.url+'" data-verse="'+val.verse+'" ><span class="glyphicon glyphicon-heart"style="float: right;margin-left: 20px;color: #000000;"></span></a>'
        }


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
var playlistofUser =[];
var playlistafter=[];
var playlistbefore=[];
// Kiểm tra nếu đã có localStorage["shopping-cart-items"] hay chưa?
if (localStorage["play-list-of-User"] != null) {
    playlistofUser = JSON.parse(localStorage["play-list-of-User"]);
}
$.each('playlistofUser',function(index,item){
    $('.addmylist').each(function(){
        if($(this).getAttribute('id')===item.id){

            $(this).find('span').css('color','red');

        }
    });

});