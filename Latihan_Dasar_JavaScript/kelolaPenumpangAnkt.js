// Pengelolaan Penumpang Angkot ('sangat sederhana)
// -Penumpang naik
//   -tambahPenumpang()
// -Penumpang turun
//   -hapusPenumpang()

// tambahPenumpang()
// - 2 parameter :
//      -namaPenumpang
//      -array penumpang
// - Rules :
//      -jika angkot kosong, penumpang naik duduk di kursi pertama
//      -penumpang berikutnya duduk di kursi selanjutnya secara berurutan
//      -jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu.
//      -asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
//      -nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

// tambahPenumpang()
// - 2 parameter :
//      -namaPenumpang
//      -array penumpang
// - Rules :
//      -jika angkot kosong, tampilkan pesan bahwa angkot kosong
//      -jika ada penumpang yang sesuai, hapus nama penumpang pada attay dengan memberi nilai undefined
//      -jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya

var penumpang = ['kurniawan','aj'];
var penumpangNaik = function(namaPenumpang, penumpang){
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang){
                console.log(namaPenumpang + ' Sudah ada dalam angkot');
                return penumpang;
            } else if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang 
            } else if(i+1 == penumpang.length){
                penumpang.push(namaPenumpang)
                return penumpang;
            } 
        }
    }
}
var penumpangTurun = function name(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang
            } else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada dalam angkot');
                return penumpang;
            }
        }
    }
}


