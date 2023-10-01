<template>
  <ul class="menuBox">
    <li @click="$router.push('/home')">홈</li>
    <li @click="$router.push('/review')">리뷰 보기</li>
    <li @click="useAuth('/register')">리뷰 작성하기</li>
    <li @click="useAuth('/mypage')">마이페이지</li>
  </ul>
</template>

<script>
export default {
    name : "Nav",
    methods : {
        useAuth(path){
            if (localStorage.getItem("token")) {
                this.$router.push(path)
            } else {
                alert("로그인해주세요!")
            }
        }
    }
}
</script>

<style>
    .menuBox{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menuBox li{
        /* font-size: 48px; */
        font-size: 3.4vw;
        font-weight: 700;
        text-align: center;
        margin: 20px 38px;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        padding: 20px;
        transition: all 0.2s;
    }
    .menuBox li:hover{
        transform: scale(1.2);
    }
</style>