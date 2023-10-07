<template>
  <div class="container">
    <div class="logoBox">
      <img class="logo" src="@/assets/bear.png" />
      <div class="titleBox">
        <Title :size="9.7222" />
  <h1 @click="$router.push('/home')" class="title">START</h1>
    </div>
   </div>
    <div class="boxContainer">
      <Box v-for="(item, index) in bear" :key="index">
        <template v-slot>
          <img class="bearImg" :src="require(`@/assets/${item}`)" />
        </template>
      </Box>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue"
import Box from "@/components/Box.vue"

export default {
  name: "StartPage",
  components : { Title, Box },
  data(){
    return{
      bear : ["bear01.png","bear02.png","bear03.png","bear04.png","bear05.png","bear06.png","bear07.png","bear08.png","bear09.png"]
    }
  }
};
</script>

<style scoped>
.container {
  background: linear-gradient(78deg, #fff 37.1%, #3ebaff 77.26%);
  height: 100vh;
}
.logoBox{
  position: relative;
  top:51%;
  left: -23%;
}
.titleBox{
  position: absolute;
  top:57%;
  left: 50%;
  transform: translate(-50%,50%);
}
.logo{
  width: 27vw;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-80%);
}
.bearImg{
  width: 10vw;
}
.boxContainer{
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top:10%;
  right: -3%;
  width: 50%;
  transform: rotate(45deg);
}
.title {
  color: #fff9f9;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Gluten;
  font-size: 7.7222vw;
  letter-spacing: -7px;
  -webkit-text-stroke: 7px rgb(178, 159, 244);
  cursor: pointer;
}
</style>
