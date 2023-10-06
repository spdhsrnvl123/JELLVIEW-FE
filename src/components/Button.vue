<template>
  <div v-if="show == false" class="loginBox">
    <button  @click="$emit('openModal')">로그인하기</button>
  </div>
  <div v-else class="loginBox2">
    <button @click="logoutHandler">로그아웃</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logoutHandler() {
      if (confirm("로그아웃 하시겠습니까?")) {
        localStorage.removeItem("token");
        location.reload();
      }
    },
  },
  created() {
    let token = localStorage.getItem("token");
    if (token) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<style scoped>
button {
  border-radius: 12px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
  padding: 0.3em 0.7em;
  font-size: 2.4vw;
  background: rgba(0, 163, 255, 0.2);
  cursor: pointer;
}
.loginBox {
  position: absolute;
  right: 4%;
  top: 4%;
  z-index: 100;
}
.loginBox2 {
  position: absolute;
  right: 4%;
  top: 4%;
  z-index: 100;
}
</style>
