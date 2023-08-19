<template>
		<LoginButton @openModal = "modalStatus = true" />
		<transition name="fade">
			<LoginModal @closeModal = "modalStatus = false" :modalStatus="modalStatus" />
		</transition>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue"
import LoginModal from "@/components/LoginModal.vue"

export default {
	data(){
		return{
			modalStatus : false
		}
	},
	components : {
		LoginButton : LoginButton,
		LoginModal : LoginModal
	}
}
</script>

<style>
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 0.2s;₩
}
.fade-leave-to{
  opacity: 0;
}

.fade-enter-from{
	opacity: 0;
}
.fade-enter-active{
  transition: all 0.8s;
}
.fade-enter-to{
	opacity: 1;
}
</style>