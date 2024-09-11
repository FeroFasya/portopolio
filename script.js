// JavaScript to change nav link color to gradient on hover
document.querySelectorAll('#nav-list li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundImage = 'linear-gradient(to right, #ff4081, #ff80ab)';
        this.style.webkitBackgroundClip = 'text';
        this.style.color = 'transparent';
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#fff';
        this.style.backgroundImage = 'none';
    });
});

document.querySelectorAll('.about-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('slide-out');

        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // Delay sebelum pindah halaman
    });
});

// Animasi slide-out saat klik link
document.body.classList.remove('slide-out');
