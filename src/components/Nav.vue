<template>
  <ul class="menuBox">
    <li>홈</li>
    <li>JellFo소개</li>
    <li>리뷰 작성하기</li>
    <li>마이페이지</li>
  </ul>
</template>

<script>
export default {
    name : "Nav"
}
</script>

<style>
    .menuBox{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menuBox li{
        font-size: 48px;
        font-weight: 700;
        padding-left: 51px;
        padding: 20px 48px;
        text-shadow: 3px 3px 1px #d0d2cf;
        cursor: pointer;
        transition: all 0.2s;
    }
    .menuBox li:nth-child(1){
        color : #00A3FF;
    }
    .menuBox li:hover{
        transform: scale(1.2);
    }
</style>