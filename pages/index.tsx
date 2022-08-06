import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { useEffect } from "react";

export default function Home() {
    const startScan = async () => {
        const status = await BarcodeScanner.checkPermission({ force: true });

        if (status) {
            await BarcodeScanner.hideBackground(); // make background of WebView transparent

            // if (document) {
            //     document.body.requestFullscreen();
            // }
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

    useEffect(() => {
        startScan();
    });

    return (
        <>
            <div className="sample-background">
                {/* Scanner will come here */}
            </div>
            <div className="container">
                <div className="barcode-scanner--area--container">
                    <div className="relative">
                        <p>Aim your camera at a barcode</p>
                    </div>
                    <div className="square surround-cover">
                        <div className="barcode-scanner--area--outer surround-cover">
                            <div className="barcode-scanner--area--inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
