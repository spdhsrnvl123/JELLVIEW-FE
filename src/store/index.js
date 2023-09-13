import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    jelly: [],
    inputData: "",
    review: [],
    myReview : [],
    outputData: [],
    bool: false,
    userInfo: {},
  },
  mutations: {
    setData(state, data) {
      state.jelly = data;
    },
    setInputData(state, data) {
      state.inputData = data; //data는 검색창에 입력한 데이터값이다.
      state.outputData = [];
      state.jelly.filter((v) => {
        if (state.inputData === "") {
          state.outputData.push(v);
        } else if (v.jname.includes(state.inputData)) {
          state.bool = false;
          state.outputData.push(v);
        } else {
          state.bool = true;
        }
      });
      console.log(state.outputData);
    },
    setReviewData(state, data) {
      data = data.sort((a, b) => {
        return b.ridx - a.ridx;
      });
      state.review = data;
    },
    setMyReviewData(state, data) {
      data = data.sort((a, b) => {
        return b.ridx - a.ridx;
      });
      state.myReview = data;
    },
    //유저정보 셋팅
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    //젤리 정보 받아오기
    async getData(context) {
      await axios
        .get("http://localhost:8001/jellies")
        .then((response) => {
          // console.log(response.data.result);
          context.commit("setData", response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //리뷰 정보 받아오기
    async getReviewData(context) {
      await axios
        .get("http://localhost:8001/review")
        .then((response) => {
          // console.log(response.data)
          context.commit("setReviewData", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //나의 리뷰 정보 받아오기
    getMyReviewData(context, email) {
      // console.log(email)
      axios
        .get(`http://localhost:8001/review/${email}`)
        .then((response) => {
          // console.log(response.data)
          context.commit("setMyReviewData", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //리뷰 삭제 하기
    deleteReviewData(context, id) {
      axios
        .delete(`http://localhost:8001/delete?id=${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 유저 정보 받아오기
    getUserData(context, token) {
      // console.log(token);
      axios({
        method: "GET",
        url: `http://localhost:8001/auth/kakao/user?token=${token}`,
      })
        .then((res) => {
          // console.log(res.data);
          context.dispatch("getMyReviewData",res.data.email);
          context.commit("setUserInfo", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
