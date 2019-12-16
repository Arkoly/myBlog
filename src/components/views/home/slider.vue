<template>
  <div>
  
    <div class="md-card-media">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .md-card-media{
    position: relative;
    .swiper-container{
        height: 300px;
        width: 1000px;
        background: #ca5050;
    }
    .swiper-container-vertical > .swiper-pagination-bullets{
      left: 0;
    }
    .swiper-pagination-bullet{
      width: 100px;
      height: 30px;
      border-radius: 0;
    }
  }
</style>