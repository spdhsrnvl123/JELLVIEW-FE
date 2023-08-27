<template>
  <div class="container2">
    <Haribo2 />
    <Logo />
  </div>
</template>

<script>
import Haribo2 from './Haribo2.vue';
import Logo from './Logo.vue';

export default {
    components : {
        Logo : Logo,
        Haribo2 : Haribo2
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
</style>