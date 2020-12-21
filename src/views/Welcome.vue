<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <login></login>
      <p>No registered yet? <span @click="showLogin = false">Sign up</span></p>
    </div>
    <div v-else>
      <signup></signup>
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import { ref } from 'vue'

export default {
  components: { Signup, Login },
  setup(){
    const showLogin = ref(true)

    return { showLogin }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 90%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome button {
    margin: 15px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
</style>