function sapXep() {
    var a = document.getElementById("num11").value
    var b = document.getElementById("num22").value
    var c = document.getElementById("num33").value
    var countChan = 0;
    var countLe = 0;
    if (a % 2 == 0) {
        countChan++;
    } else {
        countLe++;
    }
    if (b % 2 == 0) {
        countChan++;
    }else{
        countLe++;
    }
    if (c % 2 == 0) {
        countChan++;
    } else{
        countLe++;
    }
 document.getElementById("txtThongbao3").innerHTML = " có " + countChan +" số chẵn "+ " ,có " + countLe +" số lẻ "
}
 document.getElementById("btnTinh3").onclick = sapXep