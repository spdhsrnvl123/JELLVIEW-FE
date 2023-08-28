<template>
    
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(a, i) in $store.state.jelly"
      :key="i"
      class="imgBoxII"
    >
      <div class="imgBox">
        <img class="real" src="../assets/Happy-Cola-Zourr.webp" />
        <div class="cardContent">
          <h1>{{ a.jname }}</h1>
          <button>상세보기</button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.imgBox{
      position: relative;
  z-index: 11;
  right: 12%;
}
.cardContent{
      background: rgba(0, 0, 0, 0.41);
  width: 110px;
  border-top-right-radius : 133px;
  border-bottom-right-radius: 133px;
  padding : 40px 27px;
  position: absolute;
  z-index: -1;
  top:50%;
  left:124%;
  transform: translate(-50%,-50%);
}
.cardContent h1{
  font-size : 26px;
  color :#ffffff;
  padding-bottom: 10px;
}
.imgBox .real{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1.25));
    width: 17vw;
    height: 24vw;
}
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
