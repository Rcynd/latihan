// Manipulasi Array 

// 1. Menambah isi array

// var arr = [];
// arr[0] = 'Rian';
// arr[1] = 'Muhammad';
// arr[2] = 'Afri';
// console.log(arr);

// 2 MEnghapus isi array

// var arr = ['Rian','muhammad','afriansyag','kurniawan'];
// arr[1] = undefined;
// console.log(arr);

// 3 Menampilkan isi array

// var arr = ['Rian','muhammad','afriansyag','kurniawan'];
// for (var i = 0; i < arr.length; i++) {
    //     console.log('Mahasiswa ke-'+i+" : "+arr[i]);
// }  


// Method pada array
var arr = ['Rian','muhammad','afriansyag','kurniawan'];
// 1. Join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('gunawan','ardian');
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Jajang')
// arr.shift()
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal,mauDihapusBerapa,elemenBaru1-n)
arr.splice(2,0,'Jujun','kusna')
// console.log(arr.join(' - '));

// 5. slice
//  slice('indexAwal','indexAkhir);
// arr2 = arr.slice(1,3)
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8,9,0];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// var cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(cetak)
// var nama = arr;
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-'+i+" : "+e);
// })

// 7. map
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join('-'));

// 8. sort
var angka = [1,4,6,3,5,7,2,9,10,40];
// console.log(angka.join('-'));
// angka.sort(function (a,b) {
//     return a-b;
// });
// console.log(angka.join('-'));

// 9. filter
var angka2 = angka.find(function(e){
    return e > 5;
})
console.log(angka2);