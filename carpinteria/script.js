// Generar código QR
function generateQRCode() {
    // Reemplaza con tu número de WhatsApp real
    const whatsappNumber = "5211234567890";
    const message = encodeURIComponent("Hola, estoy interesado en una cotización de muebles");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Usar librería QRCode.js
    new QRCode(document.getElementById("qrcode"), {
        text: whatsappUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Llamar la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si existe el elemento qrcode
    if (document.getElementById('qrcode')) {
        // Cargar la librería QRCode dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js';
        script.onload = generateQRCode;
        document.body.appendChild(script);
    }
    
    // Tu código existente aquí...
});