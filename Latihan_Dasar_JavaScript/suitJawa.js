var tanya = true;

while (tanya == true) {
// Menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang');


// menangkap pilihan komputer
// membangkitkan bilangan random
var com = Math.random();

if (com < 0.33333) {
    com = 'gajah';
}else if (com >= 0.3333 && com <= 0.6666) {
    com = 'semut';
} else {
    com = 'oramg';
}

var hasil = '';
// menentukan rules
if(p == com){
    hasil = 'SERI!'
} else if (p == 'gajah') {
    hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
} else if (p == 'orang') {
    hasil = (com == 'gajah') ? 'MENANG!' : 'KALAH!';
} else if (p == 'semut') {
    hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
} else {
    hasil = 'Memasukkan Pilihan Yang Salah';
}


// tampilkan hasilnya
tanya = confirm('\ Kamu memilih : '+p+'\n Komputer memilih : '+com+' \n Maka Hasilnya : Kamu '+hasil+'\n \n Ulangi Lagi?');
}
alert('Terimakasih Telah Bermain');