import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const imagesApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 4000,
  params: {
    api_key: '0yg0MlFKwZBQUhHvrfIJAsclzKqVFA9dY5eNPDDM',
    sort_by: 'start_date': none, 
    'end_date': today
  }
})
