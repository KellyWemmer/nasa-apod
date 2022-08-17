<template>
  <div class="home-page" :style="{backgroundImage:`url(${image.ImgUrl})`}">
    <!-- {{image}} -->
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState';
import { imageService } from '../services/ImageService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
export default {
  setup() {
    
    async function getImage() {
      try {
        await imageService.getImage()
      } catch (error) {
        logger.error('[Getting Image]', error)
        Pop.error(error)      
      }
    }

    onMounted(() => {
      getImage()
    })

    return {  
      image: computed(() => AppState.image),
      getImage
    }
  },
};
</script>


<style>
.home-page {
  background-size: cover;
  /* position: fixed; */
  height: 100vh;
  width: 100vh;
}

</style>