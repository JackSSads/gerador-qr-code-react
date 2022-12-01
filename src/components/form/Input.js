import "./Input.css"
import { useState } from "react";

import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"


export default function Input() {

    const [url, setUrl] = useState('');
    const [qrLink, setQrlink] = useState(null);

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3,
        }, function (err, url) {
            setQrlink(url);
        },);
    }

    function handleUrl(e) {
        setUrl(e.target.value);
        handleGenerate(e.target.value);
    };

    return (
        <div className="content">
            <input type="text" placeholder="Digite seu link"
                onChange={handleUrl} value={url} />

            <QRCode value={url} />

            {qrLink ? (
                    <a href={qrLink} download="QRCode.png">Baixar Código QR</a>)
                : (
                    <a href={qrLink} style={{ backgroundColor: "	#bb2124" }} disabled >Baixar Código QR</a>)
            }

        </div>
    )
}