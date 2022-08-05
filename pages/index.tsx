import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export default function Home() {
    const startScan = async () => {
        const status = await BarcodeScanner.checkPermission({ force: true });

        if (status) {
            await BarcodeScanner.hideBackground(); // make background of WebView transparent

            if (document) {
                document.body.requestFullscreen();
            }
            // start scanning and wait for a result
            const result = await BarcodeScanner.startScan();

            // if the result has content
            if (result.hasContent) {
                alert(result.content); // log the raw scanned content
            }

            await BarcodeScanner.stopScan();
            await BarcodeScanner.showBackground();
        }
    };

    return (
        <div>
            <button onClick={() => startScan()}>Click here to scan</button>
        </div>
    );
}
