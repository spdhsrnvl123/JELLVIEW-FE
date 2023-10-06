<template>
  <Balloon />
  <div class="TitleBox">
    <Title :size="7" />
  </div>
  <div class="container">
    <div class="reviewWrite">리뷰 작성하기</div>
    <form v-on:submit.prevent="dataSubmit">
      <h2>별점을 입력해주세요!</h2>
        <Star @point="handlePointEvent" />
      <div class="topBox">
        <input v-model="title" type="text" placeholder="제목을 입력해주세요!" required />
        <span>젤리선택</span>
        <select v-model="jidx" @change="urlchange">
          <option v-for="a in $store.state.jelly" :value="a.jidx" :key="a">
            {{ a.jname }}
          </option>
        </select>
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
import Nav from "@/components/Nav.vue";
import Star from "@/components/Star.vue";
import axios from "axios";
import Title from '@/components/Title.vue';

export default {
  components: { Balloon, Nav, Star, Title },
  data() {
    return {
      title: "",
      jidx: 101,
      content: "",
      score : 1
    };
  },
  created() {
    let token = localStorage.getItem("token");
    this.$store.dispatch("getUserData", token);
    this.$store.dispatch("FETCH_JELLIES").then(() => {
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
    handlePointEvent(e){
      this.score = e;
    },
    dataSubmit(e) {
      axios
        .post("http://localhost:8001/save", {
          title: this.title,
          content: this.content,
          jidx: this.jidx,
          star: this.score,
          email: this.$store.state.userInfo.email,
        })
        .then((response) => {
          console.log(response);
          return this.$store.dispatch("FETCH_REVIEW")
        })
        .then(()=>{
          this.$router.push("/review")
        })
        .catch((err) => {
          console.log(err);
        });
      alert("리뷰가 작성되었습니다.");
    },
  },
};
</script>
<style scoped>
h2{
  font-size: 3vw;
  /* padding: 4px; */
  padding-bottom: 6px;
}
.star-rating{
    display: flex;
}
.star{
    font-size: 4vw;
}
.reviewWrite {
  font-size: 7.3vw;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.TitleBox {
  position: absolute;
  top:3%;
  left:2%;
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
  text-align: center;
  padding: 0.05em 0.1em;
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
