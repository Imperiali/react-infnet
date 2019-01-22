import axios from 'axios'
import {Api} from "../constants";

class MovieService {

    constructor() {
        this.axios = axios.create({
            baseURL: `http://www.omdbapi.com`
        })
    }

    fetchMovies(callback) {
        this.axios.get(`?apikey=${Api.API_KEY}&t=Fight`)
            .then((response) => {
                callback(response.data)
            })
            .catch( err => console.error(err))
    }
}

export default new MovieService();