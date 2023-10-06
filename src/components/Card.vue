<template>
    <img class="productImg" :src="selected_product.jimg" />
  <div class="date">작성날짜 : {{ review.created_at.slice(0, 10) }}</div>
  <div class="cardBox">
    <div>
    <div v-if="editBool == false" class="starBox">
    <span class="star">별점 :</span>
    <!-- start - 별점라인-->
    <div class="star-rating">
      <div v-for="index in 5" :key="index">
        <img
          v-if="index < score + 1"
          style="width: 3vw"
          src="../assets/star2.png"
        />
        <img
          v-if="index > score"
          style="width: 3vw"
          src="../assets/star1.png"
        />
      </div>
    </div>
      <!-- end -->
    </div>
      <Star :currentScore="score" v-if="editBool == true" @point="handlePointEvent" />
    </div>
    <div>선택한 상품 : {{ selected_product.jname }}</div>
    <div class="write">작성자 : {{ review.email }}</div>
    <h1>
      제목 :
      <span v-if="editBool == false">{{ review.title }}</span>
      <input
        v-if="editBool == true"
        v-model = "review.title"
        type="text"
        placeholder="제목을 입력해주세요!"
      />
    </h1>
    <div class="content">
      내용 :
      <span v-if="editBool == false">{{ review.content }}</span>
      <textarea
        v-if="editBool == true"
        v-model="review.content"
        maxlength="300"
        placeholder="내용을 입력해주세요!"
      />
    </div>
  </div>
      <div class="buttonBox" v-if="$store.state.userInfo.email == review.email">
        <button v-if="editBool == false" @click="editBool = true">수정</button>
        <button v-if="editBool == true" @click="editHandler(review.ridx)">
          수정완료
        </button>
        <button v-if="editBool == false" @click="deleteHander(review.ridx)">
          삭제
        </button>
        <button v-if="editBool == true" @click="editBool = false">
          수정취소
        </button>
    </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star.vue"

export default {
  name: "card",
  data() {
    return {
      editBool: false,
      selected_product : {},
      score : this.review.star,
    };
  },
  components : {
    Star
  },
  props: {
    review: Object,
  },
  created() {
    let token = localStorage.getItem("token");
    //토큰이 있을 경우에만 유저정보 가져오기
    if (token) {
      this.$store.dispatch("getUserData", token)

      //작성한 리뷰의 상품에 대해서 일치하는 상품 필터링(이름, 이미지)
      let product = this.$store.state.jelly.filter((v) => {
        return this.review.jidx == v.jidx;
      });
      this.selected_product = product[0];
    }
  },
  methods: {
    deleteHander(ridx) {
      if (confirm("작성한 후기를 삭제하시겠습니까?")) {
        this.$store.dispatch("deleteReviewData", ridx);
        alert("후기가 삭제되었습니다.");
        location.reload();
      }
    },
    editHandler(ridx) {
      axios
        .post("http://localhost:8001/editById", {
          title: this.review.title,
          content: this.review.content,
          star: this.score,
          ridx: ridx,
        })
        .then((response) => {
          console.log(response);
          alert("후기가 수정 되었습니다.");
          this.editBool = false;
          this.$store.dispatch(
            "FETCH_MYREVIEW",
            this.$store.state.userInfo.email
          );
          this.$store.dispatch("FETCH_REVIEW");
        })
        .catch((err) => {
          console.log(err);
        });
    },
        handlePointEvent(e){
          this.score = e
    },
  },
};
</script>

<style scoped>
.cardBox {
  position: relative;
  left: 9%;
  padding: 18px 20px;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-size: 2.3vw;
  height: 7.5em;
  background: linear-gradient(180deg, #e6e5ff 0%, #fff 100%);
  margin-bottom: 10px;
  overflow-y: auto;
}

.listBox h1 {
  font-size: 3.4vw;
  margin-bottom: 10px;
}
.buttonBox{
  display: flex;
  justify-content: center;
}
.buttonBox button {
  font-size: 3.3vw;
  background: #16f916;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  width:14%;
  border-radius: 6px;
}

.listBox select {
  background: #ffffff;
  border-radius: 30px;
  border: 0;
  font-size: 2vw;
  vertical-align: middle;
  padding: 0px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
input {
  border-radius: 30px;
  border: 0;
  font-size: 3vw;
  padding: 0px 20px;
  width: 60%;
  outline: none;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
textarea {
  width: 80%;
  vertical-align: top;
  background: #ffffff;
  border-radius: 30px;
  border: 0;
  font-size: 3vw;
  padding: 0px 20px;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.productImg {
  position: absolute;
  z-index: 99;
  transform: translate(-57%,13%);
  width: 15vw;
}
.write {
  position: absolute;
  top: -0.1%;
  right: 0%;
  background: #ffffff;
  padding: 10px 17px;
  font-weight: bold;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
}
.content {
  font-size: 1em;
  width: 80%;
}
.date {
  text-align: center;
  font-size: 2vw;
  margin: 10px;
}
.star-rating {
  display: flex;
}
.star {
  font-size: 3vw;
  padding-right: 10px;
}
.starBox{
  display: flex;
  align-content: center;
}

</style>
