<template>
	<div class="container">
		<div class="titleBox">
		<Title :size="10" />
		</div>
		<Nav />
		<Input />
		<ListBox /> 
		<Button @openModal = "modalStatus = true" />
		<transition name="fade">
			<Modal @closeModal = "modalStatus = false" :modalStatus="modalStatus" />
		</transition>
		<Balloon />
	</div>
</template>

<script>
import ListBox from "@/components/ListBox.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import Nav from "@/components/Nav.vue"
import Input from "@/components/Input.vue"
import Balloon from "@/components/Balloon.vue"
import Title from "@/components/Title.vue"
import Haribo from '@/components/Haribo.vue';

export default {
	data(){
		return{
			modalStatus : false,
		}
	},
	created(){
	    this.$store.dispatch('FETCH_JELLIES');
	},
	components : {
    Button,
    Modal,
	ListBox,
	Nav,
	Input,
	Balloon,
	Title,
	Haribo
	}
}
</script>

<style scoped>
.titleBox{
	margin-top : 40px;
}
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