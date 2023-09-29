import { createStore } from "vuex";
import actions from "./actions"
import mutations from "./mutations";

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
  mutations,
  actions
});
