export function getDataFromApi(){
    const path = '../data/data.json'
    return fetch(path)
        .then((response) => response.json)
        .catch((error) => console.error(error))
}