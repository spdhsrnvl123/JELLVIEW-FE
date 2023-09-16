<template>
  <div class="inputBox">
    <div class="lay" v-if="bool"></div>
    <form @submit="handleSubmit">
      <input
        v-model="data"
        @input="validateInput"
        placeholder="젤리 이름을 입력해주세요~!"
        maxlength="100"
      />
      <button type="submit">검색</button>
    </form>
  </div>
</template>

<script>
import { Transition } from 'vue';

export default {
  name: "Input",
  data() {
    return {
      data: "",
      bool : false
    };
  },
  methods: {
    validateInput() {
      const englishRegex = /^[A-Za-z]+$/;
      if (englishRegex.test(this.data)) {
        //정규표현식 테스트
        console.log("영어입력은 불가능합니다");
        this.bool = true;
      }else{
        this.bool = false;
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      // console.log(this.data)
      this.$store.commit("setInputData", this.data);
    },
  },
  created() {},
};
</script>

<style scoped>
.inputBox {
  display: flex;
  justify-content: center;
  position: relative;
}
.inputBox .lay::before {
  content: "영어말고 한글로 입력해주세유ㅠㅠ";
  background: #f5f5f5;
  border-radius: 50px;
  position: absolute;
  font-size: 2vw;
  top: -40%;
  left: -35%;
  width: 26%;
  box-shadow: 0px 6px 20px #b5b3b3;
  text-align: center;
  padding: 10px;
}
.inputBox .lay::after {
  content: "";
  background: #f5f5f5;
  position: absolute;
  font-size: 2vw;
  top: 80%;
  left: -6%;
  box-shadow: 0px 6px 20px #b5b3b3;
  text-align: center;
  padding: 10px;
  border-radius: 50px;
  transform: rotate(30deg);
}
.inputBox input {
  margin: 0 auto;
  background: #f5f5f5;
  border: 3px solid #ffffff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 700;
  width: 25vw;
  font-size: 2vw;
  padding: 4px 35px;
  z-index: 99;
  box-shadow: 0px 6px 20px #b5b3b3;
}
.inputBox input:focus {
  outline: none;
}

.inputBox button {
  background: rgba(0, 163, 255, 0.2);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 1;
  font-weight: 900;
  font-size: 2vw;
  padding: 6px 16px;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 7px #b5b3b3;
}
</style>
