
var tebak;
var ulang = true;
var player = confirm('\ ingin bermain tebak angka? \n tekan OK jika ingi bermain \n \n "Cara bermain : Komputer akan menetapakan angka random dari 1 sampai 10 , dan tugas anda hanya menebak angka yang ditetapkan komputer. Anda hanya memiliki 3 kali Kesempatan" ');

if (player) {
    while (ulang) {
        var computer = Math.round(Math.random()*10);
    for (var k = 3; k >0; k--) {
        tebak = prompt('Anda memiiki '+k+'x kesempatan \n \n isi Tebakan Anda :');
        if (tebak == computer) {
            alert('Selamat Jawaban Anda BENAR! '+tebak)
            k = 0
            var menang = true;
        } else if( tebak < computer){
            alert('Jawanan Anda Terlalu Rendah ');
            var menang = false;
        } else if( tebak > computer){
            alert('Jawanan Anda Terlalu Tinggi ');
            var menang = false;
        } else if(tebak = null){
            var menang = null
        } else{
            alert('tolong isi dengan angka 1 - 10 ');
            var menang = false;
        }
    } if (!menang) {
        alert('Sayang sekali kesempatan anda Habis')
    } else if (null){

    }
    ulang = confirm('Ulang?');
}
alert('Terimakasih Sudah bermain')
}