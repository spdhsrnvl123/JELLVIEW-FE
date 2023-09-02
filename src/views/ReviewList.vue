<template>
  <Header />
  <div class="reviewText">리뷰 보기</div>
        <img class="balloonBundle" src="@/assets/balloon.png" />
        <img class="balloonBundle2" src="@/assets/balloon.png" />
  <div class="mainContent">
    <ul class="listBox">
        <li v-for="(a, i) in this.$store.state.review" :key="i">
          <div>Star : {{ a.star }}</div>
          <div>선택한 상품 : {{ a.jidx }}</div>
          <div>작성날짜 : {{ a.created_at.slice(0,10) }}</div>
          <h1>제목 : {{ a.title }}</h1>
          <div class="content">내용 : {{ a.content }}</div>
          <div class="buttonBox">
            <button>수정</button>
            <button @click="deleteHander(a.ridx)">삭제</button>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: { Header, Nav, Balloon },
  created(){
	    this.$store.dispatch('getReviewData');
	    this.$store.dispatch('getData');
  },
  methods : {
    // 후기삭제요청
    deleteHander(ridx){
      if(confirm("작성한 후기를 삭제하시겠습니까?")){
        this.$store.dispatch('deleteReviewData',ridx)
        alert("후기가 삭제되었습니다.")
	      this.$store.dispatch('getReviewData');
      }
    }
  }
};
</script>

<style scoped>
.mainContent {
  overflow: scroll;
  /* height: 52.4vh; */
  width: 59%;
  margin: 0 auto;
  padding: 10px;
}
.reviewText{
  font-size: 7.2vw;
  text-align: center;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.listBox {
  margin-right: 29px;
  width: 100%;
}
.listBox li {
  align-items: center;
  height: 30%;
  padding: 18px 20px;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 30px;
  font-size: 2.3vw;
  background: #d9d9d9;
  margin-bottom: 10px;
  /* height: 40vh; */
  overflow: scroll;
}
.listBox h1{
  font-size: 3.4vw;
}
.buttonBox{
  display: flex;
  justify-content: flex-end;
}
.buttonBox button {
  font-size: 2.5vw;
  background: #16f916;
  font-weight: 600;
  padding: 1px 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  transition: all 0.1s;
  margin : 10px;
}
.balloonBundle{
      position: fixed;
      z-index: -1;
    bottom: 0;
    width: 40%;
    height: 40%;
    right: 0%;
    animation: move 3s linear infinite alternate;
}
.balloonBundle2{
      position: fixed;
      z-index: -1;
    bottom: 0;
    width: 40%;
    height: 40%;
    left: 0%;
    animation: move 3s linear infinite alternate;
}
</style>
