<template>
  <div class="swiper-demo">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <!-- <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> -->
        <swiper-slide v-for="(imgs,index) in imgUrl" :key="index"> 
           <img :src="imgs.img" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

      </swiper>
  </div>
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper , swiperSlide } from 'vue-awesome-swiper' 
Vue.use(VueAwesomeSwiper)
export default {
  name: 'swiper-demo',
  data () {
    return {
      // swiperOption: {
      //   autoplay:3000,
      //   grabCursor: true,
      //   setWrapperSize:true,
      //   autoHeight:true,
      //   pagination:'.swiper-pagination',
      //   paginationClickable:true,
      //   prevButton:'.swiper-button-prev',
      //   nextButton:'.swiper-button-next',
      //   mousewheelControl:true,
      //   observeParents:true,
      //   loop:true,
      //   debugger:true,
      //   onTransitionStart(swiper){
      //     console.log(swiper)
         
      //   }
      // },
      swiperOption: {
          slidesPerView: 1,
          spaceBetween:30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },

      imgUrl:[
        {
           img:require("../assets/img/nature1.jpg")
        },
        {
           img:require("../assets/img/nature2.jpg")
        },
        {
           img:require("../assets/img/nature3.jpg")
        }
      ]
    }    
  },
  components:{
    swiper ,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/swiper.min.css" ;
</style>
