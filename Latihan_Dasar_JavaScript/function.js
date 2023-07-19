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

console.log(jumlahVolumeDuaKubus(2,3));