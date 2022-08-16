import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const imagesApi = Axios.create({
  baseURL: 'https://bcw-getter.herokuapp.com',
  timeout: 4000,
  params: {
    url: 'https://api.nasa.gov/planetary/apod',
    api_key: '0yg0MlFKwZBQUhHvrfIJAsclzKqVFA9dY5eNPDDM'    
  }
})
