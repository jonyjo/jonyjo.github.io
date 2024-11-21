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
    // Set the initial text for the Shoelace copy button
    copyButton.textContent = 'Click to copy QR code';
    copyButton.copyLabel = 'Copied!'; // Shoelace default copy success message
    copyButton.errorLabel = 'Whoops, copying not supported!';

    // Create a text element for the copy label
    const copyLabel = document.createElement('span');
    copyLabel.textContent = "Click to copy QR code's embedded data: ";

    // Append both copy label and button to the alert element
    alertElement.appendChild(copyLabel);
    alertElement.appendChild(copyButton);

    // Position the alert box at the top center of the screen
    alertElement.style.position = 'fixed';
    alertElement.style.top = '29px';
    alertElement.style.left = '100%';
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
