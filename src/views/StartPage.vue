<template>
  <div class="container">
    <div class="hariboBox">
      <Haribo />
      <h1>JellFo</h1>
    </div>
  </div>
</template>

<script>
  import Haribo from '@/components/Haribo.vue';

  export default {
    name: 'StartPage',
    components: {
      Haribo : Haribo
    }
  }
</script>

<style scoped>
  h1{
  font-size: 10vw;
  }
  .container{
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
  .hariboBox{
    display : flex;
    flex-direction : column;
    width: 100%;
    justify-content : center;
    align-items : center;
    transition: all 1s;
  }

</style>