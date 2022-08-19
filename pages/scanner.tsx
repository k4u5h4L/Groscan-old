import Quagga from "quagga";
import { useEffect } from "react";

export default function Scanner() {
    useEffect(() => {
        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 320,
                        facingMode: "environment",
                    },
                    area: {
                        // defines rectangle of the detection/localization area
                        top: "10%", // top offset
                        right: "10%", // right offset
                        left: "10%", // left offset
                        bottom: "10%", // bottom offset
                    },
                },
                locator: {
                    halfSample: true,
                    patchSize: "large", // x-small, small, medium, large, x-large
                    debug: {
                        showCanvas: true,
                        showPatches: false,
                        showFoundPatches: false,
                        showSkeleton: true,
                        showLabels: false,
                        showPatchLabels: false,
                        showRemainingPatchLabels: false,
                        boxFromPatches: {
                            showTransformed: true,
                            showTransformedBox: true,
                            showBB: true,
                        },
                    },
                },
                numOfWorkers: 4,
                decoder: {
                    readers: [
                        "code_128_reader",
                        "ean_reader",
                        "ean_8_reader",
                        "code_39_reader",
                        "code_39_vin_reader",
                        "codabar_reader",
                        "upc_reader",
                        "upc_e_reader",
                        "i2of5_reader",
                        "2of5_reader",
                        "code_93_reader",
                    ],
                    debug: {
                        drawBoundingBox: true,
                        showFrequency: true,
                        drawScanline: true,
                        showPattern: true,
                    },
                },
                locate: true,
            },
            function (err) {
                if (err) {
                    return console.log(err);
                }
                Quagga.start();
            }
        );

        Quagga.onDetected((item) => {
            console.log(item.codeResult.code);

            Quagga.stop();
        });

        return () => {
            Quagga.offDetected((item) => {
                // console.log(item);

                Quagga.stop();
            });
        };
    }, []);

    return (
        <>
            <div id="interactive" className="viewport" />
        </>
    );
}
