<template>
  <div class="modalContainer" v-if="modalStatus == true">
    <div class="modalSection">
      <button @click="$emit('closeModal')" class="closeModal">&times;</button>
      <img class="yellow" src="@/assets/yellow.png" />
      <button @click="kakaoButton">
        <img class="kakaoLoginButton" src="@/assets/kakao_login_button.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props : {
    modalStatus : Boolean
  },
  methods : {
    kakaoButton(){
    window.open(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=e83ad4f76c812b501942955e9bd1f59a&redirect_uri=http://localhost:5001/auth/kakao/callback`
        ,"_self")
    }
  }
}
</script>

<style>
.modalContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
}
.modalSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 65%;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
}
.modalSection .yellow{
  width: 13vw;
  height: 20vw;
  position: absolute;
  top:40%;
  left:50%;
  transform: translate(-50%,-50%);
}
.modalSection .kakaoLoginButton{
    position: absolute;
      width: 19vw;
  height: 5vw;
  bottom:5%;
  left:50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
}
.closeModal{
    position: absolute;
    top:2%;
    right:6%;
    width: 30px;
    font-size: 51px;
    font-weight: 300;
    border: 0;
    cursor: pointer;
    background-color: transparent;
}
</style>
