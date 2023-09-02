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
    v-if="$store.state.inputData == ''"
  >
    <swiper-slide v-for="(a, i) in $store.state.jelly" :key="i">
      <div class="imgBox">
        <img class="real" :src="a.jimg" />
        <div class="cardContent">
          <h1>{{ a.jname }}</h1>
          <button @click="openModal(i)">상세보기</button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <Swiper v-else>
    <swiper-slide>
      <div class="imgBox" v-if="$store.state.outputData[0] !== undefined">
        <img class="real" :src="$store.state.outputData[0]?.jimg" />
        <div class="cardContent">
          <h1>{{ $store.state.outputData[0]?.jname }}</h1>
          <button @click="openModal($store.state.outputData[0].jidx -101)">상세보기</button>
        </div>
      </div>
      <div class="imgBox" v-else>
        <h2>정확히 입력해주셔야 돼유ㅠㅠ</h2>
        <span>젤리이름 : 골드베렌, 스타믹스, 해피콜라, 웜스, 부시, 웜스 자우어, 해피콜라 자우어, 해피콜라 그랩스</span>
      </div>
    </swiper-slide>
  </Swiper>
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
  methods: {
    openModal(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>
<style scoped>
.imgBox {
  position: relative;
  z-index: 11;
  right: 4%;
}
.imgBox h2{
  font-size: 3vw;
}
.imgBox span{
  font-size: 1.2vw;
}
.cardContent {
  background: rgba(0, 0, 0, 0.41);
  /* width: 110px; */
  width: 50%;
  border-top-right-radius: 133px;
  border-bottom-right-radius: 133px;
  padding: 40px 7px;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 114%;
  transform: translate(-50%, -50%);
}
.cardContent button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  transition: all 0.4s;
  font-size: 1.3vw;
  background: #16f916;
  padding: 2px 5px;
}
.cardContent button:hover {
  transform: scale(1.2);
  background: black;
  color: white;
}
.cardContent h1 {
  font-size: 1.7vw;
  color: #ffffff;
  padding-bottom: 10px;
}
.imgBox .real {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  width: 16vw;
  height: 21vw;
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
