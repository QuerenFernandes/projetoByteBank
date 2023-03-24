addEventListener("message", event => {
    // extract person passed from main thread from event object
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/GBP-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.GBPBRL)
}