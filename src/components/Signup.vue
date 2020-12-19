<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="name" v-model="name">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(name.value, email.value, password.value)
    }

    return { name, email, password, handleSubmit }
  }
}
</script>

<style>

</style>