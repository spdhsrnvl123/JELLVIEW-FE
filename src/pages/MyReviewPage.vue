<template>
  <ReviewBox />
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Card from "@/components/Card.vue";
import Nav from "@/components/Nav.vue";
import ReviewBox from '@/components/ReviewBox.vue';

export default {
  components: {  Nav, Balloon, Card, ReviewBox },
  data(){
    return{
      bool : true,
    }
  },
  created() {
    let token = localStorage.getItem("token");
    console.log(token)
    this.$store.dispatch("getUserData",token);
    this.$store.dispatch("FETCH_JELLIES").then(()=>{
      this.$store.dispatch("FETCH_REVIEW")
    })
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
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  border: 0;
  cursor: pointer;
  transition: all 0.1s;
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