// Menambahkan kelas 'slide-in' saat halaman dimuat
window.onload = function() {
    // Cari elemen dengan ID 'about' dan tambahkan kelas slide-in
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.classList.add('slide-in');
    }
};
