function duDoan(){
    var a= document.getElementById("num111").value
    var b= document.getElementById("num222").value
    var c= document.getElementById("num333").value
    if(a==b==c){
        document.getElementById("txtThongbao4").innerHTML ="Tam giác đều";
    }else if( a==b || a==c || b==c){
        document.getElementById("txtThongbao4").innerHTML ="Tam giác cân";
    } else if( a*a==b*b+c*c||b*b==a*a+c*c||c*c==a*a+b*b){
        document.getElementById("txtThongbao4").innerHTML = "Tam giác vuông";
    }
    else{
        document.getElementById("txtThongbao4").innerHTML = "Tam giác khác";
    }
}
document.getElementById("btnTinh4").onclick=duDoan