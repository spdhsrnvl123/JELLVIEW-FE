<template>
  <div class="container">
    <img src="@/assets/bear.png" />
    <div class="titleBox">
    <Title :size="9.7222" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue"

export default {
  name: "StartPage",
  components : { Title },
};
</script>

<style scoped>
.container {
  background: linear-gradient(78deg, #fff 37.1%, #3ebaff 77.26%);
  height: 100vh;
}
.titleBox{
  position: absolute;
  top:55%;
  left: 50%;
  transform: translate(-50%,100%);
}
.container img{
  width: 28vw;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-70%);
}
</style>
