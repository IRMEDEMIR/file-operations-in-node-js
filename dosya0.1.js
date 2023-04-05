var fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => {
    return new Promise((resolve) => {
      readline.question(question, (input) => resolve(input));
      
    });
};

fs.open('hasges.txt', 'w+', async function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("Sucuk hazırlanıyor...");  //dosyayı açtı
  
    console.log("Lütfen sucuk yapımında kullanılan 3 adet malzeme giriniz..");
    const malzeme1 = await ask('1. Malzeme:');
    const malzeme2 = await ask('2. Malzeme:');
    const malzeme3 = await ask('3. Malzeme:');
    
    //console.log("Girdiğiniz Malzemeler:", malzeme1, malzeme2, malzeme3);
    
    fs.writeFile('hasges.txt', malzeme1 + ' ' + malzeme2 + ' ' + malzeme3 , function (err) {
      if(err) {
        return console.log(err); 
      }
      console.log('Sucuk kurutulmaya hazır..')   //dosyaya yazdı
    });

    fs.readFile('hasges.txt', 'utf8', function (hata, veri) {
      console.log('Katılan malzemeler: ' + veri);  //dosyadan okudu
    });
    readline.close();  //kursoru kapattı
});
