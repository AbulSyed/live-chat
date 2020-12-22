<template>
  <div class="container">
    <navbar></navbar>
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composable/getUser'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar },
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