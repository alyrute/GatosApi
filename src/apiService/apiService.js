const API = "https://cataas.com/api/";

export async function GetGatosByCategoria(categoria){
  const data = await fetch(`${API}cats?tags=${categoria}`)
  const json = await data.json()
  return json
}
export async function GetCategorias() {
  const data = await fetch(`${API}tags`);
  const json = await data.json();
  return json;
}