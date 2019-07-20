var KTiklama = false;
var STiklama = false;

function Kadi() {
    if (KTiklama == false) {
        document.getElementById("KAdi").value = "";
        KTiklama = true;
    }
    if (document.getElementById("Sifre").value == "") {
        document.getElementById("Sifre").value = "Şifre";
        STiklama = false;
    }
}
function sifre() {
    if (STiklama == false) {
        document.getElementById("Sifre").value = "";
        STiklama = true;
    }
    if (document.getElementById("KAdi").value == "") {
        document.getElementById("KAdi").value = "Kullanıcı Adı";
        KTiklama = false;
    }
}
