import { reactive } from 'vue'
import { Image } from './models/Image.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  /**@type {import('./models/Image.js').Image} */
  image: {}
})
