<template>
  <div class="container">
    <img src="@/assets/bear.png" />
    <Title :size="9.7222" />
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
</style>
