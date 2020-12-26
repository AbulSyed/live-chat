<template>
  <div class="container">
    <navbar></navbar>
    <new-chat-form></new-chat-form>
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'

export default {
  components: { Navbar, NewChatForm },
  setup(){
    const { user } = getUser()

    const router = useRouter()

    watch(user, () => {
      if(!user.value){
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>