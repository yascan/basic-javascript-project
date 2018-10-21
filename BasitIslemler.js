function hesapla(){
        var sayi1, sayi2;
        var topla, cikar, carp, bol;
        sayi1= parseInt(document.getElementById("sayi1").value);
        sayi2= parseInt(document.getElementById("sayi2").value);
        topla=(sayi1+sayi2);
        cikar=sayi1-sayi2;
        carp=sayi1*sayi2;
        bol=sayi1/sayi2;
        document.getElementById("topla").innerHTML=topla;
        document.getElementById("cikar").innerHTML=cikar;
        document.getElementById("carp").innerHTML=carp;
        document.getElementById("bol").innerHTML=bol;
        }
