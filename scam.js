Quagga.init({
    inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#interactive'),
        constraints: {
            width: 480,
            height: 320,
            facingMode: 'environment', // or 'user' for the front camera
        },
    },
    decoder: {
        readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
    },
}, function (err) {
    if (err) {
        console.error('Error initializing Quagga:', err);
        return;
    }
    Quagga.start();
});

Quagga.onDetected(function (result) {
    const qrCodeResult = document.getElementById('qr-code-result');
    const rentButton = document.getElementById('rent-button');

    qrCodeResult.textContent = QR Code detected: ${result.codeResult.code};
    rentButton.removeAttribute('disabled');
});

document.getElementById('rent-button').addEventListener('click', function () {
    alert('Cycle rented successfully!');
    resetScanner();
});

function resetScanner() {
    Quagga.stop();
    const qrCodeResult = document.getElementById('qr-code-result');
    const rentButton = document.getElementById('rent-button');

    qrCodeResult.textContent = 'Scan a QR code to rent a cycle.';
    rentButton.setAttribute('disabled', 'disabled');
    Quagga.start();
}