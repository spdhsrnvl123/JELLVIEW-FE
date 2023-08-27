
## test
<template>
  <div class="home">
    <a href="/user">사용자 목록</a>
    <button @click="getData">데이터 호출</button>
  </div>
  <div class="container">
    ss
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Test',
  methods : {
    getData() {
      axios.get('http://localhost:8001/jellies')
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}

</script>

<style scoped>
  .container{
    background: black;
  }
</style>