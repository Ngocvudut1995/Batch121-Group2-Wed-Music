/**
 * Created by Vu Dang on 10/26/2015.
 */
var user = []; // Khai bao 1 mang rong.


user.push({username: 'VuDang',password: '12345'});
user.push({username: 'LeTu',password: '12345'});
function login(u,p){
    var success=false;
    $.each(user,function(index,item){
       if(item.username===u && item.password===p) {
           success=true;
           return false;
       }
    });
    return success;
}