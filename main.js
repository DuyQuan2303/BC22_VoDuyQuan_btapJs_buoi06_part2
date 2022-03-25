document.getElementById("btnBaiTap").onclick = function () {
  var n = document.getElementById("txtN").value * 1;
//   console.log(n);
    inSNT(n);
};

function kiemTraSNT(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;


}

function inSNT (n){
    var result = "";
    for (let i =2; i <=n; i++){
        if (kiemTraSNT(i)){
            result = `${result} ${i} `;
            console.log(i, ' ')
        }
    }
    document.getElementById("footerBaiTap").innerHTML = result.trim();
}


// kiemTraSNT(0);
