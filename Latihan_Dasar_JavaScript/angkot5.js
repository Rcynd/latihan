var noAngkot =1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('angkot No. '+noAngkot+' Beroperasi dengan baik.');
    }else if(noAngkot === 8 || noAngkot === 10) {
        console.log('angkot No. '+noAngkot+' Sedang Lembur');
    }else{
        console.log('angkot No. '+noAngkot+' Sedang tidak beroperasi');
    }
    
}