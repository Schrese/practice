import axios from 'axios';


const baseGET = () => {
    try {
        return axios.get('https://api.pokemontcg.io/v1/cards').then(response => {
            return response.data.cards
        })
    } catch (error) {
        return new Promise(() => {
            console.log(error)
        })
    }
}

export {
    baseGET
}