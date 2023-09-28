<template>
  <div class="container2">
  <!-- <img src="../assets/haribo.png" /> -->
    <Logo />
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
    components : {
        Logo : Logo,
    }
}
</script>

<style scoped>
    .container2{
      max-width: 100%;
      display: flex;
      justify-content: center;
      margin-right: 100px;
      padding-top: 12px;
    }
      img{
    width: 14vw;
    height : 14vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
</style>