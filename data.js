const nama = "aretas newton";
let usia = 18;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18 ) {
        //jika kondisi pertama
        generasi = "remaja"
    }
    else if ( usia >= 18 && usia < 60) {
        //ketika kondisi kedua terpenuhi
        generasi = "dewasa"
    }
    else if (usia <= 10 && usia > 2) {
        //ketika kondisi ketiga terpenuhi
        generasi = "anak-anak"
    }
    else if ( usia < 2) {
        generasi = ("bayi")
    }
    else {
        //ketika semua kondisi tidak terpenuhi
        generasi = ("lansia")
    }
    return biodata.innerHTML = generasi;
    
}
//return biodata.innerHTML = generasi;
//console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
console.log(nama);
console.log(usia);

generateBiodata();



