function sapXep() {
    var a= document.getElementById("num1").value
    var b= document.getElementById("num2").value
    var c= document.getElementById("num3").value
    if (a>b) {
        if(b>c){
            document.getElementById("txtThongbao").innerHTML = c + "," +b +","+a;

        }
        else if(a>c){
            document.getElementById("txtThongbao").innerHTML = b + "," +c +","+a;

        }
        else{
            document.getElementById("txtThongbao").innerHTML = b + "," +a +","+c;
        }
        
    } else if(b>c) {
        if (a>c) {
            document.getElementById("txtThongbao").innerHTML = c + "," +a +","+b;
        }else{
            document.getElementById("txtThongbao").innerHTML = a + "," +c +","+b;

        }

     }
        
    else{
        document.getElementById("txtThongbao").innerHTML = a + "," +b+","+c;

    }
}
document.getElementById("btnTinh").onclick=sapXep