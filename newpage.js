
function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
                const alertContainer = document.createElement('div');
        alertContainer.classList.add('alert', 'alert-success'); // Use Shoelace styles

        const alertText = document.createTextNode(`You scanned QR code: ${decodedText}`);
        alertContainer.appendChild(alertText);

        const copyButton = document.createElement('sl-copy-button');
        copyButton.value = decodedText;
        copyButton.copyLabel = 'Copy';
        copyButton.successLabel = 'Copied!';
        copyButton.errorLabel = 'Copy failed!'; // Improve error message

        alertContainer.appendChild(copyButton);

        document.body.appendChild(alertContainer); // Insert after body for better layout
     
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
