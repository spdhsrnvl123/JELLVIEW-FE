<template>
  <!-- <h1>별점 선택</h1> -->
  <div class="inner">
    <div class="star-rating">
      <!-- <div class="star" v-for="index in 5" :key="index" @click="check(index)"> -->
      <div class="star" v-for="index in 5" :key="index" @click="handleCheck(index)">
        <img
          v-if="index < score + 1"
          style="width: 5vw"
          src="../assets/star2.png"
        />
        <img
          v-if="index > score"
          style="width: 5vw"
          src="../assets/star1.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Star",
  emits : ['point'],
  props : {
    currentScore : Number
  },
  data() {
    return {
      score: 1,
    };
  },
  created(){
    if(this.currentScore){
      this.score = this.currentScore;
    }
  },
  methods: {
    handleCheck(index) {
      this.score = index;
      this.$emit('point', this.score);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 4vw;
}
.star-rating {
  display: flex;
}
.star {
  font-size: 4vw;
}
</style>
