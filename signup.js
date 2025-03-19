document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simulasi pendaftaran
    messageElement.textContent = `Selamat datang, ${username}! Anda berhasil mendaftar.`;

    // Kosongkan form setelah submit
    this.reset();

    // Menghilangkan pesan setelah beberapa detik
    setTimeout(() => {
        messageElement.textContent = '';
    }, 5000);
});
