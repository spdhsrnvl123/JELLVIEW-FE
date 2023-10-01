<template>
  <ReviewBox />
</template>

<script>
import ReviewBox from '@/components/ReviewBox.vue'

export default{
  name : 'ReviewPage',
  components : {ReviewBox},
  created() {
  this.$store.dispatch("FETCH_JELLIES").then(
    ()=>{
    //   this.$store.dispatch("FETCH_REVIEW").then(()=>{
    //     this.reviewget = true;
    //   });
      this.$store.dispatch("FETCH_REVIEW")
    }
  );
},
}
</script>

<style></style>
