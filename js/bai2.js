function luaChonloimoi() {
    var Thanhvien = document.getElementById("selectPercent").value
    if (Thanhvien==30) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Bố!"
        
    } else if(Thanhvien==20) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Mẹ!"
        
    }else if(Thanhvien==15) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Anh trai!"
        
    }else{
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Em Gái!"
    }
}
document.getElementById("btn1").onclick = luaChonloimoi;