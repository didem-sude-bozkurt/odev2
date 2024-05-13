// content.js

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener("DOMContentLoaded", function() {
    // Ben resmi tıklandığında
    var benResmi = document.querySelector(".did");
    var eskiResimYolu = benResmi.src; // Eski resmin yolunu kaydet

    // Ben resmi tıklandığında
    benResmi.addEventListener("click", function() {
        if (benResmi.src.includes("Ben.jpeg")) {
            benResmi.src = "gulen_yuz.jpg"; // Resmi gulen_yuz.jpg olarak değiştir
            document.body.classList.add("gulenMod"); // Gülen yüz modunu etkinleştir
        } else {
            benResmi.src = eskiResimYolu; // Resmi eski haline dön
            document.body.classList.remove("gulenMod"); // Gülen yüz modunu devre dışı bırak
        }
    });
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.insertCSS(tab.id, {file: "styles.css"});
  });
  