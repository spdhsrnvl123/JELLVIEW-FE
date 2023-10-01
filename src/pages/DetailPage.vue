<template>
  <div class="modalContainer">
    <section class="modalSection">
        <div class="content">
            <div class="imgBox">
                <img :src="$store.state?.jelly[currentURL.id]?.jimg" />
            </div>
              {{ jellyGet }}

            <div class="title">{{ $store.state?.jelly[currentURL.id]?.jname }}</div>
            <div class="contentII">{{ $store.state?.jelly[currentURL.id]?.jdetail }}</div>
            <!-- <Chart /> -->
              <h1>-영양정보 100g당-</h1>
            <div class="nutrition">
              <div>열량 : {{ $store.state?.jelly[currentURL.id]?.jcalorie }}kcal</div>
              <div>지방 : {{ $store.state?.jelly[currentURL.id]?.jprovince }}g</div>
              <div>포화지방 : {{ $store.state?.jelly[currentURL.id]?.jsaturatedFat }}g</div>
              <div>탄수화물 : {{ $store.state?.jelly[currentURL.id]?.jcarbohydrate }}g</div>
              <div>당류 : {{ $store.state?.jelly[currentURL.id]?.jsugars }}g</div>
              <div>단백질 : {{ $store.state?.jelly[currentURL.id]?.jprotein }}g</div>
              <div>나트륨 : {{ $store.state?.jelly[currentURL.id]?.jsalt }}mg</div>
              <button @click="useAuth('/review', $store.state?.jelly[currentURL.id]?.jidx)" class="reviewButton">후기 작성하기</button>
            </div>
          </div>
          <button @click="closeModal" class="modalButton">&times;</button>
        </section>
      </div>
</template>

<script>
import Balloon from '@/components/Balloon.vue';
import Chart from '@/components/Chart.vue';


export default {
    methods: {
        closeModal() {
            this.$router.push('/home');
        },
        useAuth(path, id){
            if (localStorage.getItem("token")) {
                this.$router.push({ path : path, query : { key : id } })
            } else {
                alert("로그인해주세요!")
            }
        }
    },
    computed: {
        currentURL() {
            return this.$route.params;
        },
        jellyGet(){
          return this.$store.state.jelly
        }
    },
    created() {
        this.$store.dispatch('FETCH_JELLIES');
    },
    components: { Balloon, Chart }
}
</script>

<style scoped>
  .modalContainer{
      display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  /* background-color: rgba(0, 0, 0, 0.3); */
  /* transition: all 10s; */
  animation: represent 7s ease-out alternate infinite forwards;
  }

  @keyframes represent {
    0%{
      background-image: url("../assets/1.jpeg")
    }
    50%{
      background-image: url("../assets/2.jpeg")

    }
    100%{
      background-image: url("../assets/3.jpeg")
    }
  }
  .modalSection{
      position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 43vw;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .modalButton{
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
  .imgBox{
      position: absolute;
  top: 10%;
  left: 3.5%;
  }
  .imgBox img{
    width: 26vw;
    height: 32vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    transition: all 0.1s;
  }
  .imgBox :hover{
    transform: rotate3d(1, 1, 1, -30deg);
  }
  .content{
      display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 37%;
  }
  .content h1{
    text-align: center;
    font-size: 4.5vw;
    padding: 20px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  }
  .title{
      font-size: 6.5vw;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  margin: 10px auto;
  width: 35vw;
  text-align: center;
  }
  .subTitle{
      font-size: 3.5vw;
  font-weight: bold;
  padding: 0.2vw 6vw;
  }
  .contentII{
  padding: 0.1vw 8vw;
      font-size: 2.5vw;
      border-radius: 40px;
      width:69%;
  }
  .nutrition{
    width: 31%;
    height: 60%;
    padding: 1.2vw 11vw;
    margin-left: 6vw;
    border-radius: 30px;
    font-size: 2.8vw;
    text-align: center;
    box-shadow: 0px 2px 10px gray;
    margin-bottom: 10%;
    background-color: #f8f0fc;
  }
  .nutrition :nth-child(1){
    text-align: center;
    font-size: 3vw;
  }
  .reviewButton{
    font-size: 2.4vw;
    background: #16f916;
    padding : 3px 4px;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 17%;
    border: 0;
        cursor: pointer;
        position : absolute;
        bottom:3%;
        left:13%;
        transition: all 0.1s;
  }
  .reviewButton:hover{
    background: #afc6e7;
  }
</style>