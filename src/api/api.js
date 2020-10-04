import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data } = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData
    } catch (error) {
        alert('Lo sentimos 1. Parece que se ha caido el servidor API. Por favor, vuelve a intentarlo en unos minutos.')
    }

}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        return data

    } catch (error) {
        alert('Lo sentimos 3. Parece que se ha caido el servidor API. Por favor, vuelve a intentarlo en unos minutos.')
    }
}