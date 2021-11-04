//buat variabel
let id_pengguna = document.getElementById('id_pengguna');
let nama_pengguna = document.getElementById('nama_pengguna');
let bio_pengguna = document.getElementById('bio_pengguna');
let btn = document.querySelector('.btn');
let inputText = document.getElementsByTagName('input')[0];


//ketika tombol di klik
btn.addEventListener('click', function(){
    //buat sebuah fetch
    //dan ketika apapun yang di ketikan oleh saya
    fetch('https://api.github.com/users/' + inputText.value)
    //ambil data JSON pada API
    .then(res => res.json())
    //tangkap data API
    .then(data=>{
        //dan tampilkan
      id_pengguna.innerHTML = `<span>${data.id}</span>`;
      nama_pengguna.innerHTML = `<span>${data.name}</span>`;
      bio_pengguna.innerHTML = `<span>${data.bio}</span>`;
    });
});
