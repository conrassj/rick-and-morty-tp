const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters(page = 1) {

  try {

    const response = await fetch(`${BASE_URL}?page=${page}`);

    const data = await response.json();

    return data;

  } catch (error) {

    console.error("Error al obtener personajes:", error);

  }
}