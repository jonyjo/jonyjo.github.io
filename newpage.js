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
    alertElement.classList.add('alert'); // Add CSS class for styling (optional)
    alertElement.textContent = `You scanned QR code: ${decodeText}`;

    // Create a copy button element with Shoelace styles
    const copyButton = document.createElement('sl-copy-button');
    copyButton.value = decodeText;
    copyButton.copyLabel = 'Click to copy QR code';
    copyButton.successLabel = 'Copied!';
    copyButton.errorLabel = 'Whoops, copying not supported!';

    // Append copy button to the alert element
    alertElement.appendChild(copyButton);

    // Display the alert with copy button
    document.body.appendChild(alertElement);
  }
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
