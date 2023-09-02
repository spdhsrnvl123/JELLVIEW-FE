import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    jelly: [],
    inputData: "",
    review: [],
    outputData: [],
  },
  mutations: {
    setData(state, data) {
      state.jelly = data;
    },
    setInputData(state, data) {
      state.inputData = data; //data는 검색창에 입력한 데이터값이다.
      state.outputData = state.jelly.filter((v) => {
        return v.jname == data;
      });
    },
    setReviewData(state, data) {
      data = data.sort((a, b) => {
        return b.ridx - a.ridx;
      });
      state.review = data;
    },
  },
  actions: {
    getData(context) {
      axios
        .get("http://localhost:8001/jellies")
        .then((response) => {
          console.log(response.data.result);
          context.commit("setData", response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getReviewData(context) {
      axios
        .get("http://localhost:8001/review")
        .then((response) => {
          // console.log(response.data)
          context.commit("setReviewData", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
  },
});
