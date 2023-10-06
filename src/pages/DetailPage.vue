<template>
  <div class="modalContainer">
    <section class="modalSection">
      <div class="content">
        <div class="imgBox">
          <img :src="jellyInfo.jimg" />
        </div>
        <div class="prdouctName">
          <span>{{ jellyInfo.jname }}</span>
          <span>{{`(${jellyInfo.jcalorie}kcal)`}}</span>
        </div>
        <div class="contentII">
          {{ jellyInfo.jdetail }}
        </div>
        <h1>-평균 별점-</h1>
        <h1>-영양정보 100g당-</h1>
        <div v-if="jellyInfoLoaded">
        <Chart :jellyInfo="jellyInfo" />
        </div>
          <button
            @click="useAuth('/register', jellyInfo.jidx)"
            class="reviewButton"
          >
            후기 작성하기
          </button>
      </div>
      <button @click="closeModal" class="modalButton">&times;</button>
    </section>
  </div>
</template>

<script>
import Balloon from "@/components/Balloon.vue";
import Chart from "@/components/Chart.vue"

export default {
  data() {
    return {
      jellyInfo: {},
      jellyInfoLoaded : false
    };
  },
  components: { Balloon,Chart },
  methods: {
    closeModal() {
      this.$router.push("/home");
    },
    useAuth(path, id) {
      if (localStorage.getItem("token")) {
        this.$router.push({ path: path, query: { key: id } });
      } else {
        alert("로그인해주세요!");
      }
    },
  },
  created() {
    this.$store.dispatch("FETCH_JELLIES").then(() => {
      this.jellyInfo = this.$store.state.jelly[this.$route.params.id];
      console.log(this.jellyInfo)
      this.jellyInfoLoaded = true;
    })
  },
  mounted(){
      console.log(this.jellyInfo)
  },
};
</script>

<style scoped>
.modalContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  animation: represent 7s ease-out alternate infinite forwards;
}

@keyframes represent {
  0% {
    background-image: url("../assets/1.jpeg");
  }
  50% {
    background-image: url("../assets/2.jpeg");
  }
  100% {
    background-image: url("../assets/3.jpeg");
  }
}
.modalSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 48vw;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.modalButton {
  position: absolute;
  top: -5%;
  right: 5%;
  width: 30px;
  font-size: 101px;
  font-weight: 300;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}
.imgBox {
  position: absolute;
  top: 10%;
  left: 3.5%;
}
.imgBox img {
  width: 26vw;
  height: 35vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
  transition: all 0.1s;
}
.imgBox :hover {
  transform: rotate3d(1, 1, 1, -30deg);
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 37%;
}
.content h1 {
  text-align: center;
  font-size: 4.5vw;
  padding: 20px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
}
.prdouctName {
  font-size: 9vw;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.productName span:nth-child(1){
  background: red;
}
.prdouctName span:nth-child(2){
  font-size : 4vw
}
.subTitle {
  font-size: 3.5vw;
  font-weight: bold;
  padding: 0.2vw 6vw;
}
.contentII {
  padding: 0.1vw 8vw;
  font-size: 2.5vw;
  border-radius: 40px;
  width: 69%;
}
.nutrition {
  width: 31%;
  padding: 1.2vw 11vw;
  margin-left: 6vw;
  border-radius: 30px;
  font-size: 2.8vw;
  text-align: center;
  box-shadow: 0px 2px 10px gray;
  margin-bottom: 10%;
  background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
}
.nutrition :nth-child(1) {
  text-align: center;
  font-size: 3vw;
}
.reviewButton {
  background: #16f916;
  padding: 0.1em 0em;
  font-weight: 600;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: 6em;
  font-size: 2.4vw;
  border: 0;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  left: 11%;
  transition: all 0.1s;
}
.reviewButton:hover {
  background: #7dd081;
}
</style>
