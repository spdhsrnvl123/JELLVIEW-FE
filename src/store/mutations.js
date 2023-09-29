export default {
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
};