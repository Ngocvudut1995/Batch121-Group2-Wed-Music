/**
 * Created by TU on 10/27/2015.
 */
$("document").ready(function(){
   $(".div-hover").hide();
    $(".div-hover").hover( function () {
        $(this).show();
    }, function () {
        $(this).hide();

    });
});
