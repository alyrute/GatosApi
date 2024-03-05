const API = "https://cataas.com/"

export async function getGatosByCategoria(categoria) {
    const data = await fetch(`${API}cats?tags=${categoria}`);
    const json = await response.json();
    return json
}