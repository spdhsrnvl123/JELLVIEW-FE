<template>
  <div class="inputBox">
    <form>
      <input />
      <button type="submit">검색</button>
    </form>
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.inputBox {
  display: flex;
  justify-content: center;
}
.inputBox input {
  margin: 0 auto;
  background: #f5f5f5;
  border: 3px solid #ffffff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 700;
  width: 412px;
  font-size: 30px;
  padding: 4px 35px;
  z-index: 99;
  box-shadow: 0px 0px 10px #c8c6c6;
}
.inputBox input:focus {
  outline: none;
}

.inputBox button {
  background: rgba(0, 163, 255, 0.2);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 1;
  font-weight: 900;
  font-size: 30px;
  padding: 6px 16px;
  border: 0;
  cursor: pointer;
  box-shadow: 0px 0px 7px #c8c6c6;
}
</style>
