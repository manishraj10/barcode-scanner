import { Html5Qrcode } from "html5-qrcode";

const reader = new Html5Qrcode("reader");

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

reader
  .start(
    { facingMode: "environment" },
    config,
    (decodedText) => {
      document.getElementById("barcode-result").textContent = decodedText;
    },
    (error) => {
      console.warn(`Error: ${error}`);
    }
  )
  .catch((err) => {
    console.error(`Error starting the scanner: ${err}`);
  });
