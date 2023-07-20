// Kode ku
var kubusA = 8 ;
var kubusB = 3 ;
var kubusC = 10 ;
var kubusD = 15 ;

function mencariVolumeKubus(sisi) {
    nilai = sisi * sisi * sisi;
    return nilai;
}

function jumlahVolume2Kubus(kubus1 , kubus2) {
    nilai = kubus1 + kubus2;
    return nilai;
}

console.log('volume kubus a : '+mencariVolumeKubus(kubusA));
console.log('volume kubus b :  '+mencariVolumeKubus(kubusB));
console.log('jumlah volume kedua kubus a dan b '+jumlahVolume2Kubus(mencariVolumeKubus(kubusB),mencariVolumeKubus(kubusA)));
console.log('volume kubus c : '+mencariVolumeKubus(kubusC));
console.log('volume kubus d :  '+mencariVolumeKubus(kubusD));
console.log('jumlah volume kedua kubus c dan d '+jumlahVolume2Kubus(mencariVolumeKubus(kubusB),mencariVolumeKubus(kubusA)));
console.log('==================================');
// selesai kode ku



function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a*a*a;
    volumeB = b*b*b;

    return total = volumeA + volumeB;
}
// Setelah di refactorkan function di atas

// function jumlahVolumeDuaKubus(a, b) {

//     return a*a*a + b*b*b;
// }

console.log(jumlahVolumeDuaKubus(2,3));
console.log('==================================');

function tambah(a,b){
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));

console.log(hasil);
console.log('========================');

function plus() {
    var hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
        
    }
    return hasil;
}
var coba = plus(1,2,3,4,5,6);
console.log(coba);