<template>
  <Header />
  <div class="reviewTop">
    <button @click="$router.push('/reviewlist')" class="reviewText">
      전체 리뷰
    </button>
    <button @click="useAuth('/myreview')" class="reviewText">나의 리뷰</button>
  </div>
  <img class="balloonBundle" src="@/assets/balloon.png" />
  <img class="balloonBundle2" src="@/assets/balloon.png" />
  <div class="mainContent">
    <ul class="listBox">
      <li v-for="(review, i) in this.$store.state.review" :key="i">
        <Card :review="review" :jelly2="$store.state.jelly" />
      </li>
    </ul>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: { Header, Nav, Balloon, Card },
  created() {
    // let token = localStorage.getItem("token");
    // this.$store.dispatch("getUserData",token);
    this.$store.dispatch("getData").then(
      ()=>{
        this.$store.dispatch("getReviewData");
      }
    );
  },
  methods: {
    useAuth(path) {
      if (localStorage.getItem("token")) {
        this.$router.push(path);
      } else {
        alert("로그인해주세요!");
      }
    },
  },
};
</script>

<style scoped>
.mainContent {
  /* height: 52.4vh; */
  width: 59%;
  margin: 0 auto;
  padding: 10px;
}
.reviewTop {
  display: flex;
  justify-content: space-around;
  /* background: red; */
  width: 50%;
  margin: 10px auto;
}
.reviewText {
  font-size: 4vw;
  /* background: #dae7da; */
  background: transparent;
  font-weight: 600;
  padding: 1px 14px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  /* border-radius: 50px; */
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  border: 0;
  cursor: pointer;
  transition: all 0.1s;
  margin: 10px;
}
/* .reviewText:nth-child(1) {
  color: rgb(109, 109, 206);
} */
.reviewText:hover {
  transform: scale(1.2);
}
.listBox {
  margin-right: 29px;
  width: 100%;
}

.balloonBundle {
  position: fixed;
  z-index: -1;
  bottom: 0;
  width: 40%;
  height: 40%;
  right: 0%;
  animation: move 3s linear infinite alternate;
}
.balloonBundle2 {
  position: fixed;
  z-index: -1;
  bottom: 0;
  width: 40%;
  height: 40%;
  left: 0%;
  animation: move 3s linear infinite alternate;
}
</style>
