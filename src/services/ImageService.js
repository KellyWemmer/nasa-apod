import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { logger } from "../utils/Logger.js";
import { imagesApi } from "./AxiosService.js";

class ImageService {
    async getImage() {
        const res = await imagesApi.get()
        logger.log("Is this running?", res.data)
        AppState.image = new Image(res.data)
    }
}

export const imageService = new ImageService()