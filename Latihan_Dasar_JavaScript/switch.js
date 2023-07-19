// var angka = parseInt(prompt('masukkan angka :'));

// if (angka === 1) {
//     alert('anda memasukkan angka 1');
// } else if (angka === 2) {
//     alert('anda memasukkan angka 2');
// } else if (angka === 3) {
//     alert('anda memasukkan angka 3');
// } else {
//     alert('angka yang anda masukkan salah');
// }

// ubah pengkodisian diatas dengan switch-case

// switch (angka) {
//     case 1:
//         alert('anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('anda memasukkan angka 3');
//         break;
//     case 4:
//         alert('anda memasukkan angka 4');
//         break;
//     default:
//         alert('yang anda masukkan salah');
//         break;
// }

var item =prompt('masukkan nama makanan / minumam : \n (cth: nasi, daging, susu, hamburger, softdrink)')
switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman tidak sehat');
        break;
    default:
        alert('yang anda masukkan salah');
        break;
}