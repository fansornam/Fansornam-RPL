let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silahkan login terlebih daulu")
    window.location.href="login.html"
}

document.getElementById("welcome").innerHTML =
"Selamat Datang, " + user.nama