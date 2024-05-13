document.addEventListener("DOMContentLoaded", function() {
    // Logo elementine bir olay dinleyici ekleyelim
    document.getElementById("logo-img").addEventListener("click", function() {
        var logo = document.getElementById("logo-img");
        if (logo.src.includes("resim.jpg")) {
            logo.src = "kalp.png"; // Resmi kalp.jpeg olarak değiştir
        } else {
            logo.src = "resim.jpg"; // Resmi tekrar resim.jpg olarak değiştir
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Logo elementine bir olay dinleyici ekleyelim
    document.getElementById("logo-img").addEventListener("click", function() {
        var logo = document.getElementById("logo-img");
        if (logo.src.includes("resim.jpg")) {
            logo.src = "kalp.png"; // Resmi kalp.jpeg olarak değiştir
        } else if (logo.src.includes("okul.png")) {
            logo.src = "egitim.png"; // Resmi egitim.png olarak değiştir
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Okul resmine bir olay dinleyici ekleyelim
  document.querySelector(".resim").addEventListener("click", function() {
    var okulResmi = document.querySelector(".resim");
    // Eğer okul resmi görünüyorsa
    if (okulResmi.src.includes("okul.png")) {
      okulResmi.src = "egitim.png"; // Eğitim görselini yükle
      okulResmi.classList.add("kucuk-resim"); // Küçük resim sınıfını ekle
    } else {
      okulResmi.src = "okul.png"; // Okul görselini tekrar yükle
      okulResmi.classList.remove("kucuk-resim"); // Küçük resim sınıfını kaldır
    }
    var icerikMetni = document.querySelector(".metin");
    icerikMetni.innerText = "Ankara Medipol Üniversitesi Öğrencisiyim";
});
  });



document.addEventListener("DOMContentLoaded", function() {
    var benResmi = document.querySelector(".did");
    var eskiResimYolu = benResmi.src; // Eski resmin yolunu kaydet

    // Ben resmi tıklandığında
    benResmi.addEventListener("click", function() {
        if (benResmi.src.includes("Ben.jpeg")) {
            benResmi.src = "gulen_yuz.jpg"; // Resmi gulen_yuz.jpg olarak değiştir
        } else {
            benResmi.src = eskiResimYolu; // Resmi eski haline dön
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Sayfama Hoşgeldiniz başlığına bir olay dinleyici ekleyelim
    document.querySelector(".baslik").addEventListener("click", function() {
        var yanMenu = document.getElementById("yanmenu");

        // Yeni bir süper kahraman resmi oluşturalım
        var superKahramanResmi = document.createElement("img");
        superKahramanResmi.src = "superhero.jpg";
        superKahramanResmi.alt = "Süper Kahraman";
        superKahramanResmi.classList.add("superhero-img");

        // Eğer resim zaten varsa, kaldır
        var mevcutSuperhero = document.querySelector(".superhero-img");
        if (mevcutSuperhero) {
            mevcutSuperhero.remove();
        }

        // Yeni resmi yan menüye ekleyelim
        yanMenu.appendChild(superKahramanResmi);
    });
});


        


  

