<template>

<div class="titleBox">
  <Title :size="9" />
</div>
  <div class="reviewTop" >
    <button :style="{ color : col}" @click="$router.push('/review')" class="reviewText">
      전체 리뷰
    </button>
    <button :style="{ color : colII}" @click="useAuth('/myreview')" class="reviewText">나의 리뷰</button>
  </div>
  <img class="balloonBundle" src="@/assets/balloon.png" />
  <img class="balloonBundle" src="@/assets/balloon.png" />
  <!-- content -->
  <div class="mainContent">
    <ul class="listBox">
      <li v-for="(review, i) in listItems" :key="i">
        <Card :review="review" />
      </li>
    </ul>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Card from "@/components/Card.vue";
import Nav from "@/components/Nav.vue";
import Title from "@/components/Title.vue"

export default {
  components: { Nav, Balloon, Card, Title },
  data() {
    return {
      reviewget: false,
      col: "black",
      colII : "black"
    };
  },
  //네비게이션바 스타일링(칼라)
  created(){
      // this.$store.dispatch("FETCH_REVIEW");
      if(this.$route.name == "ReviewPage"){
        this.col = "rgb(100, 100, 237)";
      }else if(this.$route.name == "MyReviewPage"){
        this.colII = "rgb(100, 100, 237)"
      }else{
        this.col = "black";
        this.colII = "black";
      }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name == "ReviewPage") {
          return this.$store.state.review;
      } else if(name == "MyReviewPage"){
        return this.$store.state.myReview;
      }
    },
  },
  methods: {
    useAuth(path) {
      console.log(path);
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
.titleBox{
  padding-top: 3%;
}
.mainContent {
  width: 59%;
  margin: 0 auto;
  padding: 10px;
}
.reviewTop {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 10px auto;
}
.reviewText {
  font-size: 4vw;
  background: transparent;
  font-weight: 600;
  padding: 1px 14px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  border: 0;
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;
}
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
.balloonBundle:nth-child(1) {
  position: fixed;
  z-index: -1;
  bottom: 0;
  width: 40%;
  height: 40%;
  left: 0%;
  animation: move 3s linear infinite alternate;
}
</style>
