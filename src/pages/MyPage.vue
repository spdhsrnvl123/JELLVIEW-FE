<template>
<div class="container">
  <div class="logoBox">
    <Title :size="6" />
  </div>
  <h1 class="mypageTitle">{{ $store.state.userInfo.nickname }}님의 마이페이지</h1>
  <div class="profileImg">
    <img :src="$store.state.userInfo.profile_img" />
  </div>
  <div class="buttonBox">
    <button @click="$router.push('/register')">젤리 리뷰 작성하기</button>
    <button @click="$router.push('myreview')">내가 작성한 젤리 리뷰</button>
  </div>
  <Button />
</div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Button from "@/components/Button.vue";
import Title from '@/components/Title.vue';

export default {
  data() {
    return {
      obj: {},
      users : []
    };
  },
  created() {
  //로그인 하지 않은 사용자가 URL로 다이렉트 접근 방지
    if (localStorage.getItem("token") == undefined) {
      this.$router.push("/home");
    }
    let token = localStorage.getItem("token");
    this.$store.dispatch("getUserData",token);
  },
  components: { Balloon, Button, Title },
};
</script>

<style scoped>
.container {
  background: linear-gradient(78deg, #fff 37.1%, #3ebaff 77.26%);
  height: 100vh;
}
.logoBox {
  position: absolute;
  top: 3%;
  left: 2.5%;
}
.mypageTitle {
  position: absolute;
  top: 17%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 6vw;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.profileImg {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  /* border: 1px solid #cbc7c7; */
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
.profileImg img {
  width: 15vw;
  height: 15vw;
}
.buttonBox {
  position: absolute;
  bottom: 2%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.buttonBox button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  transition: all 0.4s;
  width: 26vw;
  height: 100px;
  /* padding : 10px 30px; */
  margin: 10px;
  font-weight: 700;
  font-size: 4vw;
  background-color: rgb(255, 255, 255);
}
.buttonBox button:hover {
  background-color: rgb(219, 217, 217);
}
</style>
