<template>
  카카오리다이렉트 페이지 입니다.
</template>

<script>
import axios from 'axios';
export default {
    name : 'KakaoRedirect',
    created(){
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        console.log(code)
        axios({
            method: "GET",
            url: `http://localhost:8001/auth/kakao/callback?code=${code}`,
          })
            .then((res) => {
              console.log(res.data.access_token); // 토큰이 넘어올 것임
              localStorage.setItem('token',res.data.access_token);
              this.$router.push('/mypage');
            }).catch((err) => {
              console.log("소셜로그인 에러", err);
        }) 

    }
}
</script>

<style>

</style>