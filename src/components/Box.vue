<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    width:11vw;
    height:11vw;
    border-radius: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 20px;
}
</style>