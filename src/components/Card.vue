<template>
  <div class="cardBox">
    <div>
      Star :
      <span v-if="editBool == false">{{ review.star }}</span>
      <select v-if="editBool == true" v-model="star">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <!-- {{ review }} -->
    <div>선택한 상품 : {{ name }}</div>
    <img class="productImg" :src="image" />
    <div class="writeDate">작성날짜 : {{ review.created_at.slice(0, 10) }}<br />
      <div>수정한 날짜 : 작성예정</div>
    </div>
    <h1>
      제목 :
      <span v-if="editBool == false">{{ review.title }}</span>
      <input
        v-if="editBool == true"
        type="text"
        placeholder="제목을 입력해주세요!"
        v-model="title"
      />
    </h1>
    <h1 class="content">
      내용 :
      <span v-if="editBool == false">{{ review.content }}</span>
      <textarea
        v-if="editBool == true"
        v-model="content"
        maxlength="300"
        placeholder="내용을 입력해주세요!"
      />
    </h1>
    <h1 class="content">작성자 : {{ review.email }}</h1>
    <!-- {{ $store.state.userInfo.email }} -->
 <div class="buttonBox" v-if="$store.state.userInfo.email == review.email">
      <button v-if="editBool == false" @click="editBool = true">수정</button>
      <button v-if="editBool == true" @click="editHandler(review.ridx)">수정완료</button>
      <button v-if="editBool == false" @click="deleteHander(review.ridx)">삭제</button>
      <button v-if="editBool == true" @click="editBool = false">수정취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "card",
  data() {
    return {
      editBool: false,
      title: this.review.title,
      content: this.review.content,
      star: this.review.star,
      jellyReview : [],
      name : '',
      image : ''
    };
  },
  props: {
    review: Object,
    bool: Boolean,
  },
  created(){
        let token = localStorage.getItem("token");
    this.$store.dispatch("getUserData", token);
      let a = this.$store.state?.jelly.filter((v)=>{
      return this.review.jidx == v.jidx
    });
    this.name = a[0]?.jname;

    //작성한 후기와 젤리정보를 비교하여 작성한 상품 후기에 대한 이미지 출력
    let imgFilter = this.$store.state.jelly.filter((v)=>{
      return v.jidx == this.review.jidx;
    })
    this.image = imgFilter[0]?.jimg;

  },
  methods: {
    deleteHander(ridx) {
      if (confirm("작성한 후기를 삭제하시겠습니까?")) {
        this.$store.dispatch("deleteReviewData", ridx);
        alert("후기가 삭제되었습니다.");
        // this.$store.dispatch("getMyReviewData",this.$store.state.userInfo.email);
          // this.$store.dispatch("getReviewData");
      location.reload();
      }
    },
    editHandler(ridx) {
      console.log(ridx);
      axios
        .post("http://localhost:8001/editById", {
            title : this.title,
            content : this.content,
            star : this.star,
            ridx : ridx
        })
        .then((response) => {
          console.log(response);
          alert("후기가 수정 되었습니다.")
          this.editBool = false;
          this.$store.dispatch("getMyReviewData",this.$store.state.userInfo.email);
          this.$store.dispatch("getReviewData");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>``

<style scoped>
.cardBox {
  align-items: center;
  height: 30%;
  padding: 18px 20px;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 30px;
  font-size: 2.3vw;
  background: linear-gradient(180deg, #E6E5FF 0%, #FFF 100%);
  margin-bottom: 10px;
  overflow: scroll;
  position: relative;
}

.listBox h1 {
  font-size: 3.4vw;
  margin-bottom: 10px;
}
.buttonBox {
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
  margin: 10px;
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
  width: 60%;
  vertical-align: top;
  background: #ffffff;
  border-radius: 30px;
  border: 0;
  font-size: 3vw;
  padding: 0px 20px;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.productImg{
  width: 12vw;
}
.writeDate{
  position: absolute;
  top:0%;
  right:-1%;
  background: #ffffff;
  padding: 10px 20px;
  border-bottom-left-radius: 30px;
}
.writeDate2{
  position: absolute;
  top:8%;
  right:-1%;
  background: #ffffff;
  padding: 10px 20px;
  border-bottom-left-radius: 30px;
}
</style>
