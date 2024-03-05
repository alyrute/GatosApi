const API = "https://cataas.com/"

async function getCutes() {
    const response = await fetch(`${API}cats?tags=cute`);
    const gato = await response.json();
    console.log(gato);
}