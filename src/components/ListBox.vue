<template>
  <div class="content">
    <div class="firstCircle"></div>
    <div class="secondCircle"></div>
    <div class="cardBox"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  position: relative;
  margin-top: 60px;
  z-index: 10px;
  background: #fba0c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 55%;
  height: 70vh;
  border-radius: 161px;
}
.firstCircle {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: -7%;
  left: -2%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fb82b1;
  width: 150px;
  height: 150px;
}
.secondCircle {
  position: absolute;
  top: -7%;
  right: -2%;
  z-index: -1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fb82b1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.cardBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 60%;
  height: 70%;
  background: #fb82b1;
  border-radius: 41px;
  overflow: hidden;
}
</style>
