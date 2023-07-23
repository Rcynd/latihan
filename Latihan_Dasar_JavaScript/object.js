//  Membuat Object
// Object Litera,

var mhs = {
   nama : 'Rian Muhammad',
   nrp : '01020304',
   email : 'rian@gmail.com',
   jurusan : 'Rekayasa Prangkat Lunak',
};
var mhs2 = {
   nama : 'Afriansyah',
   nrp : '01020305',
   email : 'afri@gmail.com',
   jurusan : 'Rekayasa Prangkat Keras',
};
// this di Literal mengembalikan object yang bersangkutan 

// Function declaration
function buatOjectMhs(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email   
    mhs.jurusan = jurusan
}
var mhs3 = buatOjectMhs('kurniawan','01020306','kurniawan@gmail.com','TKJ');
// this di Declaration mengembalikan object Global

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;    
    this.nrp = nrp;    
    this.email = email;    
    this.jurusan = jurusan;    
    // return this;
}

var mhs4 = new Mahasiswa('erik','01020307','erik@gmail.com','TKR');
// this di Constructor mengembalikan object yang baru dibuat

