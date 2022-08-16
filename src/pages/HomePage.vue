<template>
  <div class="home-page">
    {{image}}
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
</style>