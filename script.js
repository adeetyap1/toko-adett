// Handle login
function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Nama tidak boleh kosong!");
    return;
  }
  localStorage.setItem("nama_user", name);
  window.location.href = "index.html";
}

// Handle greeting
window.onload = function () {
  const nama = localStorage.getItem("nama_user");
  const greetEl = document.getElementById("greeting");
  if (nama && greetEl) {
    greetEl.textContent = `Halo, ${nama}!`;
  }
}

// Fungsi kirim pesan via WhatsApp
function order(layanan, opsi, harga) {
  const nama = localStorage.getItem("nama_user") || "User";
  const pesan = `Halo, saya ${nama}. Saya ingin memesan layanan: ${layanan} (${opsi}) (Rp ${harga.toLocaleString("id-ID")}).`;
  const nomorWa = "6289523760788"; // Nomor WhatsApp tujuan
  const waUrl = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
  window.open(waUrl, "_blank");
}