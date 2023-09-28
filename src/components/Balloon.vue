<template>
  <div class="imgBox">
    <img src="@/assets/balloonBlue.png" />
    <img src="@/assets/balloonBlue.png" />
    <img src="@/assets/balloonRed.png" />
    <img src="@/assets/balloonRed.png" />
    <img src="@/assets/balloonGreen.png" />
    <img src="@/assets/balloonGreen.png" />
    <img src="@/assets/balloonSkyblue.png" />
    <img src="@/assets/balloonSkyblue.png" />
    <img src="@/assets/balloonBlue.png" />
    <img src="@/assets/balloonSkyblue.png" />
    <img src="@/assets/balloonGreen.png" />
    <img src="@/assets/balloonBlue.png" />
    <img src="@/assets/balloonBlue.png" />
    <img src="@/assets/balloonRed.png" />
    <img src="@/assets/balloonRed.png" />
    <img src="@/assets/balloonGreen.png" />
    <img src="@/assets/balloonGreen.png" />
    <img src="@/assets/balloonSkyblue.png" />
    <img src="@/assets/balloonSkyblue.png" />
    <img src="@/assets/balloonSkyblue.png" />
  </div>
</template>

<script>
export default {
  name: "풍선 애니메이션",
};
</script>

<style scoped>
.imgBox img:nth-child(1) {
  position: absolute;
  width: 10%;
  left: 5%;
  top: 20%;
  animation: represent 6s ease-in-out infinite forwards;
}
.imgBox img:nth-child(2) {
  position: absolute;
  width: 7%;
  height: 20%;
  left: 70%;
  top: 30%;
  z-index: -10;
  animation: represent 7s ease-in-out infinite forwards;
}
.imgBox img:nth-child(3) {
  position: absolute;
  width: 6%;
  left: 10%;
  top: 60%;
  animation: represent 4s ease-in-out infinite forwards;
}

.imgBox img:nth-child(4) {
  position: absolute;
  width: 6%;
  right: 7%;
  top: 57%;
  animation: represent 5s ease-in-out infinite forwards;
}

.imgBox img:nth-child(5) {
  position: absolute;
  width: 8%;
  left: 5%;
  top: 83%;
  animation: represent 6s ease-in-out infinite forwards;
}
.imgBox img:nth-child(6) {
  position: absolute;
  width: 7%;
  left: 80%;
  top: 10%;
  animation: represent 7s ease-in-out infinite forwards;
}
.imgBox img:nth-child(7) {
  position: absolute;
  width: 8%;
  left: 23%;
  top: 35%;
  z-index: -10;
  animation: represent 6s ease-in-out infinite forwards;
}
.imgBox img:nth-child(8) {
  position: absolute;
  width: 10%;
  right: 3%;
  bottom: -10%;
  animation: represent 9s ease-in-out infinite forwards;
}
.imgBox img:nth-child(9) {
  position: absolute;
  width: 10%;
  right: 30%;
  bottom: -10%;
  z-index: -20;
  animation: represent 9s ease-in-out infinite forwards;
}
.imgBox img:nth-child(10) {
  position: absolute;
  width: 8%;
  left: 10%;
  bottom: -10%;
  z-index: -20;
  animation: represent 8s ease-in-out infinite forwards;
}
.imgBox img:nth-child(11) {
  position: absolute;
  width: 8%;
  left: 4%;
  bottom: -10%;
  z-index: -20;
  animation: represent 9s ease-in-out infinite forwards;
}
/* -- */
.imgBox img:nth-child(12) {
  position: absolute;
  width: 10%;
  left: 5%;
  top: 20%;
  animation: represent 10s ease-in-out infinite forwards;
}
.imgBox img:nth-child(13) {
  position: absolute;
  width: 7%;
  height: 20%;
  left: 70%;
  top: 30%;
  z-index: -10;
  animation: represent 11s ease-in-out infinite forwards;
}
.imgBox img:nth-child(14) {
  position: absolute;
  width: 6%;
  left: 10%;
  top: 60%;
  animation: represent 7s ease-in-out infinite forwards;
}

.imgBox img:nth-child(15) {
  position: absolute;
  width: 6%;
  right: 7%;
  top: 57%;
  animation: represent 8s ease-in-out infinite forwards;
}

.imgBox img:nth-child(16) {
  position: absolute;
  width: 8%;
  left: 5%;
  top: 83%;
  animation: represent 10s ease-in-out infinite forwards;
}
.imgBox img:nth-child(17) {
  position: absolute;
  width: 7%;
  left: 80%;
  top: 10%;
  animation: represent 11s ease-in-out infinite forwards;
}
.imgBox img:nth-child(18) {
  position: absolute;
  width: 8%;
  left: 23%;
  top: 35%;
  z-index: -10;
  animation: represent 10s ease-in-out infinite forwards;
}
.imgBox img:nth-child(19) {
  position: absolute;
  width: 10%;
  right: 3%;
  bottom: -10%;
  animation: represent 13s ease-in-out infinite forwards;
}
.imgBox img:nth-child(20) {
  position: absolute;
  width: 8%;
  left: 28%;
  top: 35%;
  z-index: -10;
  animation: represent 14s ease-in-out infinite forwards;
}

@keyframes represent {
    0%{
        transform: translateY(900px);
    }
    100%{
        transform : translateY(-1000px);
    }
}

</style>
