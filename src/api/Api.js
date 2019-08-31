class Api {

    static getDataFromApi(){
        return fetch('https://api.myjson.com/bins/b2s1v', {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

}

export default Api