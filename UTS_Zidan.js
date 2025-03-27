document.getElementById("BukaSidebar").addEventListener("click", function() {
    document.getElementById("Sidebar").classList.toggle("open");
});

document.getElementById("TutupSidebar").addEventListener("click", function() {
    document.getElementById("Sidebar").classList.toggle("open");
});

function validasiKontak(dataform) {

    if (dataform.Nama.value == "") {
        alert ("Data Nama Masih Kosong");
        dataform.Nama.focus();
        return false;
    }

    if (dataform.Email.value == "") {
        alert ("Data Email Masih Kosong");
        dataform.Email.focus();
        return false;
    } 

    else {
        var email = dataform.Email.value;
        var posisiAt = email.indexOf("@");
        var posisiTitik = email.lastIndexOf(".");
        if (posisiAt < 1 || (posisiTitik - posisiAt <2))
            {
            alert("Alamat Email Belum Benar");
            dataform.Email.focus();
            return false;
        }
    }

    if (dataform.Nomor.value == "") {
        alert ("Data Nomor Masih Kosong");
        dataform.Nomor.focus();
        return false; }
    
        if (dataform.Pesan.value == "") {
            alert ("Data Pesan Masih Kosong");
            dataform.Pesan.focus();
            return false;     
    }
    
    alert("Pesan Berhasil Dikirim");
    return true;
}