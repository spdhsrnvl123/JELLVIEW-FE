<template>
  <h1 class="title">JELLVIEW</h1>
</template>

<script>
export default {
    name : "title",
    props : {
        size : Number
    },
};
</script>

<style>
.title {
  color: #fff9f9;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Gluten;
  font-size: 9.7222vw;
  letter-spacing: -10px;
  -webkit-text-stroke: 7px rgb(178, 159, 244);
}
</style>
