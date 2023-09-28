<template>
  <div class="container">
    <div class="hariboBox">
      <Haribo />
      <Logo />
      <h1>HARIBO</h1>
    </div>
    <div class="kakaoBox">
      <img src="@/assets/balloonBack.png" />
      <div class="balloonBox">
        <img src="@/assets/balloonBlue.png" alt="파란풍선" />
        <img src="@/assets/balloonGreen.png" alt="초록생풍선" />
        <img src="@/assets/balloonRed.png" alt="빨간충선" />
      </div>
      <button @click="$router.push('/home')">JView 시작하기</button>
        <img class="balloonBundle" src="@/assets/balloon.png" />
    </div>
  </div>
</template>

<script>
import Haribo from "@/components/Haribo.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "StartPage",
  components: {
    Haribo: Haribo,
    Logo: Logo,
  },
};
</script>

<style scoped>
h1 {
  font-size: 7vw;
  position: relative;
  top: -3%;
  text-shadow: 3px 3px rgb(215, 209, 209);
}
.container {
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.hariboBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: all 1s;
}
.kakaoBox {
  position: relative;
  transition: all 2s;
}
.kakaoBox img {
  width: 53vw;
  height : 100vh;
}
.kakaoBox button {
  position: absolute;
  top:43%;
  left: 34%;
  font-size: 6vw;
  font-weight: 600;
  padding: 0px 44px;
  background-color: #16f916;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  transition: all 0.4s;
}
.kakaoBox button:hover{
  transform : scale(1.1)
}
.kakaoBox .balloonBundle{
    position: absolute;
    bottom: -3.5%;
    width: 90%;
    height: 40%;
    right: 0%;
    animation: move 3s linear infinite alternate;
}

@keyframes move {
    0%{
        transform: translateY(30px);
    }
    50%{
        transform : translateY(0px);
    }
    100%{
        transform : translateY(-30px);
    }
}

.balloonBox{
      width: 100%;
    height: 100%;
}
.balloonBox img:nth-child(1){
      position: absolute;
    left: 35%;
    top:23%;
    width:15%;
    height: 20%;
animation: move 3s linear infinite alternate;
}
.balloonBox img:nth-child(2){
    position: absolute;
    top:8%;
    width:15%;
    height: 26%;
    left: 60%;
    animation: move 3s linear infinite alternate;
}
.balloonBox img:nth-child(3){
    position: absolute;
    right: 9%;
    top:26%;
    width:13%;
    height: 23%;
    animation: move 3s linear infinite alternate;
}


</style>
