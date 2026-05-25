function register(){

let nama = document.getElementById("nama").value.trim()
let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

if(nama === "" || email === "" || password === ""){
    alert("Semua field harus diisi")
    return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let cek = akun.find(user => user.email === email)

if(cek){
    alert("Email sudah terdaftar")
    return
}

akun.push({
    nama: nama,
    email: email,
    password: password
})

localStorage.setItem("akun", JSON.stringify(akun))

alert("Pendaftaran Akun Berhasil")

window.location.href = "login.html"

}