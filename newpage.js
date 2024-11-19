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
    function onScanSuccess(decodeText, decodeResult) {
        const alertElement = document.createElement('div');
        alertElement.classList.add('alert');

        // Create a copy button element with Shoelace styles
        const copyButton = document.createElement('sl-copy-button');
        copyButton.value = decodeText;
        copyButton.copyLabel = 'Click to copy QR code';
        copyButton.successLabel = 'Copied!';
        copyButton.errorLabel = 'Whoops, copying not supported!';

        // Append copy button to the alert element
        alertElement.appendChild(copyButton);

        // Position the alert box at the top center of the screen
        alertElement.style.position = 'fixed';
        alertElement.style.top = '10px';
        alertElement.style.left = '50%';
        alertElement.style.transform = 'translateX(-50%)';

        // Add a hanging effect using CSS animation
        alertElement.classList.add('hanging-alert');

        document.body.appendChild(alertElement);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );

    htmlscanner.render(onScanSuccess);
});
