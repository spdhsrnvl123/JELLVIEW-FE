<template>
  <ul class="menuBox">
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 999;
        top:55%;
        transform: translate(-50%,-50%);
        left:12%;
    }
    .menuBox li{
        font-size: 5.4vw;
        font-weight: 700;
        text-align: center;
        margin: 10px 0px;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition: all 0.2s;
    }
    .menuBox li:hover{
        transform: scale(1.2);
    }
</style>