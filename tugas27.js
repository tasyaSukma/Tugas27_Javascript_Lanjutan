var alamat1 = ["No","rumah saya", 30, "A"]
var alamat2 = ["Jalan pangeran Tirtayasa No", 70]
var strAlamat1 = "", strAlamat2 = ""

for(var i = 0; i<alamat1.length; i++){
	strAlamat1 = strAlamat1 + alamat1[i] + " ";
}

for(var i = 0; i<alamat2.length; i++){
	strAlamat2 = strAlamat2 + alamat2[i] + " ";
}

console.log(strAlamat1)
console.log(strAlamat2)