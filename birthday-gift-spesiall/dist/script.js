// =========================================================
// 1. EFEK HUJAN LOVE (OTOMATIS BERJALAN)
// =========================================================
function createHeart() {
  if (!document.body) return;

  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  
  const heartTypes = ['❤️', '💖', '💝', '💕', '💗'];
  heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  
  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = duration + "s";
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 300);


// =========================================================
// 2. LOGIK NAVIGASI PINDAH HALAMAN MURNI
// =========================================================
const loginBtn = document.getElementById('btn-login');
const nextBtn = document.getElementById('btn-next');
const backBtn = document.getElementById('btn-back');

// Tombol Login Sukses
if (loginBtn) {
  loginBtn.addEventListener('click', function () {
    const namaInput = document.getElementById('username').value.trim().toLowerCase();
    const tanggalInput = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Akun Login kamu
    const namaBenar = "oyot"; 
    const tanggalBenar = "14juli2005"; 

    if (namaInput === namaBenar && tanggalInput === tanggalBenar) {
      document.getElementById('login-page').classList.add('hidden');
      document.getElementById('wishes-page').classList.remove('hidden');
    } else {
      errorMsg.innerText = "❌ Kok salah! Coba ingat-ingat lagi ⊙﹏⊙ 🤔💭";
    }
  });
}

// Pindah ke Galeri
if (nextBtn) {
  nextBtn.addEventListener('click', function() {
    document.getElementById('wishes-page').classList.add('hidden');
    document.getElementById('gallery-page').classList.remove('hidden');
  });
}

// Kembali ke Ucapan
if (backBtn) {
  backBtn.addEventListener('click', function() {
    document.getElementById('gallery-page').classList.add('hidden');
    document.getElementById('wishes-page').classList.remove('hidden');
  });
}