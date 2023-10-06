import { fetchJellies, fetchMyReview, fetchReview } from "@/api";
import axios from "axios";

export default {
  //젤리 정보 받아오기
  FETCH_JELLIES(context) {
    return fetchJellies().then((response) => {
        context.commit("setData", response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //리뷰 정보 받아오기
  FETCH_REVIEW(context) {
    return fetchReview()
      .then((response) => {
        context.commit("setReviewData", response.data);
        // console.log(response)
        return "리뷰 정보 받아오기 성공하였습니다."
      })
      .catch((error) => {
        console.log(error);
      });
  },

  //나의 리뷰 정보 받아오기
  FETCH_MYREVIEW(context, email) {
    fetchMyReview(email)
      .then((response) => {
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
        context.dispatch("FETCH_MYREVIEW", res.data.email);
        context.commit("setUserInfo", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
