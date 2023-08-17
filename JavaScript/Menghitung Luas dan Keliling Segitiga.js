function hitungluas(){
    alas=document.getElementById("alas").value;
    tinggi= document.getElementById("tinggi").value;
    luas= (alas*tinggi)*0.5;
    document.getElementById("luas").value=luas;
    }

    function hitungKeliling(){
    Sisi1= +document.getElementById("Sisi1").value;
    Sisi2= +document.getElementById("Sisi2").value;
    Sisi3= +document.getElementById("Sisi3").value;
    Keliling= Sisi1 + Sisi2 + Sisi3;
    document.getElementById("Keliling").value=Keliling;
    }