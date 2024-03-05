const API = "https://cataas.com/"

export async function GetGatosByCategoria(categoria) {
    const data = await fetch(`${API}cat/${categoria}`);
    const json = await response.json();
    return json
}