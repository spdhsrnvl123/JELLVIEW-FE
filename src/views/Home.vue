<template>
	<div class="container">	
		<Header />
		<Nav />
		<Input />
		<ListBox /> 
		<LoginButton @openModal = "modalStatus = true" />
		<transition name="fade">
			<LoginModal @closeModal = "modalStatus = false" :modalStatus="modalStatus" />
		</transition>
		<Balloon />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListBox from "@/components/ListBox.vue";
import LoginButton from "@/components/LoginButton.vue";
import LoginModal from "@/components/LoginModal.vue";
import Nav from "@/components/Nav.vue"
import Input from "@/components/Input.vue"
import Balloon from "@/components/Balloon.vue"

export default {
	data(){
		return{
			modalStatus : false,
		}
	},
	created(){
	    this.$store.dispatch('getData');
	},
	components : {
    LoginButton: LoginButton,
    LoginModal: LoginModal,
    Header: Header,
	ListBox : ListBox,
	Nav : Nav,
	Input : Input,
	Balloon : Balloon
	}
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 0.2s;
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