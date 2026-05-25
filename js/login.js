function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

if(email=="" || password==""){
    alert("Email dan Password harus diisi")
    return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let user = akun.find(
    u => u.email === email && u.password === password
)

if(!user){
    alert("Email atau Password Salah / Akun belum terdaftar")
    return
}

alert("Login Berhasil")
localStorage.setItem("userLogin", JSON.stringify(user))
window.location.href="user/dashboard.html"

}