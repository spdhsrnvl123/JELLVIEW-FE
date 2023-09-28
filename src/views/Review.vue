<template>
  <Balloon />
  <div class="headerBox">
    <Header />
  </div>
  <div class="container">

    <!-- {{ $store.state.jelly }} -->
    <div class="reviewWrite">리뷰 작성하기</div>
    <form v-on:submit.prevent="dataSubmit">
        <h1>별점 선택</h1>
        <div class="inner">
          <div class="star-rating">
            <div class="star" v-for="index in 5" :key="index" @click="check(index)">
              <!-- <svg v-if="index > score" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg> -->
              <!-- <svg v-if="index < score+1" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> -->
              <img v-if="index > score" style="width:5vw" src="../assets/star1.png" />   
              <img v-if="index < score+1" style="width:5vw" src="../assets/star2.png" /> 
            </div>
          </div>
        </div>
      <div class="topBox">
        <input v-model="title" type="text" placeholder="제목을 입력해주세요!" required />
        <span>젤리선택</span>
        <!-- <select v-model="jidx" @change="urlchange"> -->
        <select v-model="jidx" @change="urlchange">
          <option v-for="a in $store.state.jelly" :value="a.jidx" :key="a">
            {{ a.jname }}
          </option>
        </select>
        <!-- <select v-model="star">
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
          <option value=4>4</option>
          <option value=5>5</option>
        </select> -->
      </div>
      <textarea
        maxlength="300"
        v-model="content"
        placeholder="내용을 입력해주세요!"
        required
      />
      <button type="submit">리뷰작성</button>
    </form>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Star from "@/components/Star.vue";
import axios from "axios";

export default {
  components: { Header, Balloon, Nav, Nav, Star },
  data() {
    return {
      title: "",
      // star: 1,
      jidx: 101,
      content: "",
      score : 1
    };
  },
  created() {
    let token = localStorage.getItem("token");
    this.$store.dispatch("getUserData", token);
    this.$store.dispatch("getData").then(() => {
      if (this.$route.query.key != undefined) {
        this.jidx = this.$route.query.key;
        // console.log('key있음');
      } else {
        this.jidx = 101;
        // console.log('key없음');
      }
    });
  },
  methods: {
        check(index) {
      this.score = index;
    },
    dataSubmit(e) {
      axios
        .post("http://localhost:8001/save", {
          title: this.title,
          content: this.content,
          jidx: this.jidx,
          star: this.score,
          // Created_at : new Date(),
          email: this.$store.state.userInfo.email,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/reviewlist");
        })
        .catch((err) => {
          console.log(err);
        });
      alert("리뷰가 작성되었습니다.");
    },
  },
  // methods: {
  //   urlchange() {
  //     this.$router.push({ path : '/review', query : { key : this.jidx } })
  //   }
  // }
};
</script>

<style scoped>
h1{
    font-size: 4vw;
}
.star-rating{
    display: flex;
}
.star{
    font-size: 4vw;
}
.reviewWrite {
  font-size: 7vw;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.headerBox {
  position: absolute;
  top: -3%;
  left: 4%;
}
.topBox {
  display: flex;
  width: 58%;
  justify-content: space-around;
}
.topBox span {
  font-size: 2.3vw;
  padding-top: 1.2vw;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}
.container{
  /* font-size: 3.7vw; */
  /* margin-bottom: 20px; */
  margin: 5%;
}
.container input {
  border-radius: 30px;
  border: 0;
  font-size: 3vw;
  padding: 0px 20px;
  outline: none;
  background: #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.container textarea {
  width: 50%;
  height: 23vw;
  background: #f6f6f6;
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
  background: #f6f6f6;
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
.container button:hover {
  background: #ffffff;
  border-radius: 50%;
}
</style>
