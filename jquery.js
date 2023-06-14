

// function navbar
// $(".halaman").click(function () {
//     var id_halaman = $(this).attr("id")
//     if (id_halaman == "halaman_mahasiswa") {
//         $("#halaman_body").load("halaman_mahasiswa.php")
//     } else if (id_halaman == "halaman_beranda") {
//         $("#halaman_body").load("halaman_beranda.php")
//     }
// })

// $("#halaman_body").load("halaman_beranda.php")

$(".halaman").click(function () {
    var id_halaman = $(this).attr("id");
    if (id_halaman == "halaman_mahasiswa") {
        $("#body").load('halaman_mahasiswa.php');
    } else if (id_halaman == "halaman_beranda") {
        $('#body').load('halaman_beranda.php')
    } else if (id_halaman == "halaman_prodi") {
        $('#body').load('halaman_prodi.php')
    }
})
$('#body').load("halaman_beranda.php")
