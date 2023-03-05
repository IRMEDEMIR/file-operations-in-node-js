var fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.open('hasges.txt', 'w+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("Sucuk hazırlanıyor...");  //dosyayı açtı

  const getTheMaterials = (callback) => {
    console.log("Lütfen sucuk yapımında kullanılan 3 adet malzeme giriniz..");
    readline.question('malzeme gir: ', malzeme1 => {
      readline.question('malzeme gir: ', malzeme2 => {
        readline.question('malzeme gir: ', malzeme3 => {
          readline.close(); //kursoru kapattı
          callback(malzeme1, malzeme2, malzeme3); // Malzemeleri parametre olarak verdim.
        });
      });
    });
  }

  const writeToFileAndRead = (malzeme1, malzeme2, malzeme3) => { // Malzemeleri parametre olarak aldım
    fs.writeFile('hasges.txt', malzeme1 + ' ' + malzeme2 + ' ' + malzeme3, function (err) {

      if (err) {
        return console.log(err); // Error'a düşmüyor. Yazım başarılı
      }

      console.log('Sucuk kurutulmaya hazır..');  //dosyaya yazdı
    });

    fs.readFile("hasges.txt", "utf8", function (hata, veri) {
      console.log('Katılan malzemeler: ' + veri);  //dosyadan okudu
    });
  }

  getTheMaterials(writeToFileAndRead);

});  