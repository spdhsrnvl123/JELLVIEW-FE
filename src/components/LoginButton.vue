<template>
    <div class="loginBox">
        <button @click="$emit('openModal')">로그인하기</button>
    </div>
</template>

<script>
export default {
    name : 'LoginButton'
}
</script>

<style scoped>
    button{
        border-radius: 12px;
        border: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition : all 0.4s;
        background: rgba(0, 163, 255, 0.2);
        padding : 0.6em 0.7em;
        font-size: 2vw;
        cursor: pointer;
    }
    .loginBox{
        position: absolute;
        right: 4%;
        top:4%;
    }
</style>