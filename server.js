document.getElementById('pay-button').addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/api/get-snap-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Gunakan token di sini untuk melanjutkan proses pembayaran
            alert('Pembayaran berhasil dengan token: ' + data.token);
        } else {
            alert('Gagal mendapatkan token!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
