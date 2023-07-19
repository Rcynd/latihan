var noAngkot =1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

// Kode ku

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
//     if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log('angkot No. '+noAngkot+' Sedang Lembur');
//     }else if(noAngkot <= 6) {
//         console.log('angkot No. '+noAngkot+' Beroperasi dengan baik.');
//     }else{
//         console.log('angkot No. '+noAngkot+' Sedang tidak beroperasi');
//     }
    
// }

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('angkot No. '+noAngkot+' Beroperasi dengan baik.');
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('angkot No. '+noAngkot+' Sedang Lembur');
    }else{
        console.log('angkot No. '+noAngkot+' Sedang tidak beroperasi');
    }
    
}