// Function Hitung Mundur
const tanggalTujuan = new Date('Sep 1, 2021 00:00:00').getTime();

const hitungMundur = setInterval(function() {


	const sekarang = new Date().getTime();
	const selisih = tanggalTujuan - sekarang;

	const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
	const detik = Math.floor(selisih % (1000 * 60) / 1000);

	const teksjam = document.getElementById('hours');
	hours.innerHTML = jam;

	const teksmenit = document.getElementById('minute');
	minute.innerHTML = menit;

	const teksdetik = document.getElementById('second');
	second.innerHTML = detik;


	if (selisih < 0) {
		clearInterval(hitungMundur);
		hours.innerHTML = 'H';
		minute.innerHTML = 'B';
		second.innerHTML = 'D';
		tombol.style.visibility = 'visible';
		teks.style.visibility = 'visible';
	}

}, 1000);
// Akhir function hitung Mundur

// tombol
var tombol = document.querySelector('.get-started-btn');
var teks = document.querySelector('.teks');

function langsung() {
	window.location = "september.html";
}