function hesapla(){
    var sayi1, sayi2, sayi3;
    sayi1= parseInt(document.getElementById("sayi1").value);
    sayi2= parseInt(document.getElementById("sayi2").value);
    sayi3= parseInt(document.getElementById("sayi3").value);

    if (sayi1<sayi3 && sayi2>sayi3) {
        alert("En büyük sayı: " + sayi2 + "En küçük sayı: " + sayi1);
    } else if(sayi3<sayi2 && sayi1>sayi2){
        alert("En büyük sayı: " + sayi1 + "En küçük sayı: " + sayi3);
    } else if (sayi2<sayi1 && sayi3>sayi1) {
        alert("En büyük sayı: " + sayi3 + "En küçük sayı: " + sayi2);
    } else if (sayi1<sayi2 && sayi2<sayi3) {
        alert("En büyük sayı: " + sayi3 + "En küçük sayı: " + sayi1);
    } else if (sayi3<sayi1 && sayi2>sayi1) {
        alert("En büyük sayı: " + sayi2 + "En küçük sayı: " + sayi3);
    } else if (sayi2<sayi3 && sayi1>sayi3) {
        alert("En büyük sayı: " + sayi1 + "En küçük sayı: " + sayi2);
    }
}

