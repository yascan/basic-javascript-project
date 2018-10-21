  var sayi1, sayi2;
        sayi1= parseInt(document.getElementById("sayi1").value);
        sayi2= parseInt(document.getElementById("sayi2").value);
        if (sayi1>sayi2) {
            alert("Birinci sayı daha büyüktür.");
        }else if(sayi1<sayi2){
            alert("İkinci sayı daha büyüktür.");
        }else if(sayi1==sayi2){
            alert("Sayılar eşittir.");
        }
