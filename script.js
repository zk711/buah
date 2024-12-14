let balance = 100000;
const fruits = [
    { name: '🍎', winAmount: 10000 },
    { name: '🍌', winAmount: 21000 },
    { name: '🍇', winAmount: 38000 },
    { name: '🍒', winAmount: 43000 },
    { name: '🍉', winAmount: 16000 },
    { name: '🍊', winAmount: 25000 },
    { name: '🍓', winAmount: 34000 }
];

document.getElementById('spin').addEventListener('click', function() {
    if (balance < 1000) {
        document.getElementById('message').textContent = 'Saldo tidak cukup untuk putar!';
        return;
    }

    // Mengurangi saldo
    balance -= 1000;
    document.getElementById('balance').textContent = balance;

    // Mengacak hasil slot
    const slot1 = fruits[Math.floor(Math.random() * fruits.length)];
    const slot2 = fruits[Math.floor(Math.random() * fruits.length)];
    const slot3 = fruits[Math.floor(Math.random() * fruits.length)];

    document.getElementById('slot1').textContent = slot1.name;
    document.getElementById('slot2').textContent = slot2.name;
    document.getElementById('slot3').textContent = slot3.name;

    // Memeriksa kombinasi
    if (slot1.name === slot2.name && slot2.name === slot3.name) {
        balance += slot1.winAmount; // Menambah saldo sesuai dengan jenis buah yang menang
        document.getElementById('message').textContent = `Selamat! Anda menang Rp. ${slot1.winAmount}!`;
    } else {
        document.getElementById('message').textContent = 'Coba lagi!';
    }

    // Memperbarui saldo
    document.getElementById('balance').textContent = balance; 

    // Memeriksa apakah saldo habis
    if (balance <= 0) {
        document.getElementById('message').textContent = 'Anda telah kehabisan saldo!';
        document.getElementById('spin').disabled = true; // Menonaktifkan tombol putar
    }
});