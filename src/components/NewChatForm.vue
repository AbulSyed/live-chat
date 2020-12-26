<template>
  <form>
    <textarea placeholder="Chat here" v-model="message" @keypress.enter.prevent="handleKeypress"></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composable/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composable/useCollection'

export default {
  setup(){
    const { user } = getUser()
    const { error, addDoc } = useCollection('messages')

    const message = ref('')

    const handleKeypress = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }

      await addDoc(chat)
      if(!error.value){
        message.value = ''
      }
    }

    return { message, handleKeypress, error }
  }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>