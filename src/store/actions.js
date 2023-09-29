import axios from "axios";

export default {
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
        context.dispatch("getMyReviewData", res.data.email);
        context.commit("setUserInfo", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
