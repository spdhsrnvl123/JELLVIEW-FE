<template>
  <div class="container">
    <Balloon />
    <Header />
    <div class="reviewWrite">리뷰 작성하기</div>
    <form v-on:submit.prevent="dataSubmit">
      <div class="topBox">
        <input v-model="title" type="text" placeholder="제목을 입력해주세요!" />
        <span>젤리선택</span>
        <select v-model="jidx">
          <!-- <option v-for="a in $store.state.jelly"></option> -->
          <option value=101>골드베렌</option>
          <option value=102>스타믹스</option>
          <option value=103>해피콜라</option>
          <option value=104>웜스</option>
          <option value=105>부시</option>
          <option value=106>웜스 자우어</option>
          <option value=107>해피콜라 자우어</option>
          <option value=108>해피콜라 그랩스</option>
        </select>
        <span>별점선택</span>
        <select v-model="star">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
          <option value=4>4</option>
          <option value=5>5</option>
        </select>
      </div>
      <textarea maxlength="300" v-model="content" placeholder="내용을 입력해주세요!" />
      <button type="submit">리뷰작성</button>
    </form>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  components: { Header, Balloon, Nav, Nav },
  data() {
    return {
        title : '',
        jidx : 101,
        star : 1,
        content : '',
    };
  },
  created(){
    let token = localStorage.getItem("token");
    this.$store.dispatch("getUserData",token);
    this.$store.dispatch('getData');
    
    //상세페이지 
    if(this.$route.query.key != undefined){
      this.jidx = this.$route.query.key
    }
  },
  methods: {
    dataSubmit(e) {
      axios
        .post("http://localhost:8001/save", {
            title : this.title,
            content : this.content,
            jidx : this.jidx,
            star : this.star,
            // Created_at : new Date(),
            email : this.$store.state.userInfo.email
        })
        .then((response) => {
          console.log(response);
          this.$router.push('/reviewlist')
        })
        .catch((err) => {
          console.log(err);
        });
        alert("리뷰가 작성되었습니다.")
    },
  },
};
</script>

<style scoped>
.reviewWrite{
  font-size: 6vw;
  text-align: center;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.topBox {
  display: flex;
  width: 53%;
  justify-content: space-around;
}
.topBox span{
    font-size: 2.3vw;
    padding-top:1.2vw;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}
.container h1 {
  font-size: 3.7vw;
  margin-bottom: 20px;
}
.container input {
  border-radius: 30px;
  border: 0;
  font-size: 35px;
  padding: 0px 20px;
  outline: none;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container textarea {
  width: 50%;
  height: 23vw;
  background: #d9d9d9;
  border-radius: 30px;
  border: 0;
  margin-bottom: 20px;
  font-size: 35px;
  padding: 0px 20px;
  outline: none;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container select {
  background: #d9d9d9;
  border-radius: 30px;
  border: 0;
  font-size: 2vw;
  padding: 0px 20px;
  outline: none;
  margin-top: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container button {
  font-size: 2.5vw;
  background: #16f916;
  font-weight: 600;
  padding: 1px 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  transition: all 0.1s;
}
 .container button:hover{
    background: #ffffff;
    border-radius: 50%;
  }
</style>
