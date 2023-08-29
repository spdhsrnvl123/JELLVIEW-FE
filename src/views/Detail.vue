<template>
  <div class="modalContainer">
    <section class="modalSection">
        <div class="content">
            <div class="imgBox">
                <img :src="$store.state?.jelly[currentURL.id]?.jimg" />
            </div>
            <div class="title">{{ $store.state?.jelly[currentURL.id]?.jname }}</div>
            <div class="contentII">{{ $store.state?.jelly[currentURL.id]?.jdetail }}</div>
            <div class="nutrition">
              <h2>영양정보 100g당</h2>
              <div>열량 : {{ $store.state?.jelly[currentURL.id]?.jcalorie }}kcal</div>
              <div>지방 : {{ $store.state?.jelly[currentURL.id]?.jprovince }}g</div>
              <div>포화지방 : {{ $store.state?.jelly[currentURL.id]?.jsaturatedFat }}g</div>
              <div>탄수화물 : {{ $store.state?.jelly[currentURL.id]?.jcarbohydrate }}g</div>
              <div>당류 : {{ $store.state?.jelly[currentURL.id]?.jsugars }}g</div>
              <div>단백질 : {{ $store.state?.jelly[currentURL.id]?.jprotein }}g</div>
              <div>나트륨 : {{ $store.state?.jelly[currentURL.id]?.jsalt }}mg</div>
              <button class="reviewButton">{{ $store.state?.jelly[currentURL.id]?.jname }}<br /> 후기 작성하기</button>
            </div>
            <img class="yellow" src="../assets/yellow.png" />
          </div>
        <button @click="closeModal" class="modalButton">&times;</button>
    </section>
  </div>
</template>

<script>

export default {
  methods : {
    closeModal(){
      this.$router.push('/home')
    }
  },
  computed : {
      currentURL(){
    return this.$route.params
  },
  },
  	created(){
	    this.$store.dispatch('getData');
	},
  
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
  background-color: rgba(0, 0, 0, 0.3);
  }
  .modalSection{
      position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62vw;
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
  top: 14%;
  left: 2.5%;
  }
  .imgBox img{
    width: 26vw;
    height: 32vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
  }
  .content{
      display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-left: 37%;
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
    height: 40%;
    padding: 0.2vw 9vw;
    margin-left: 6vw;
    border-radius: 30px;
    background: rgb(60, 242, 255);
    font-size: 1.8vw;
    text-align: center;
    box-shadow: 0px 2px 10px gray;
  }
  .nutrition :nth-child(1){
    text-align: center;
    font-size: 3vw;
  }

  .content .yellow{
    width: 13vw;
    height: 20vw;
    z-index: 9999;
    position: absolute;
    bottom: 0;
    right: 0%;
  }

  .reviewButton{
    font-size: 2vw;
    background: #16f916;
    padding : 3px 4px;
    font-weight: 600;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 14%;
    border: 0;
        cursor: pointer;
        position : absolute;
        top:60%;
        left:48%;
  }

</style>