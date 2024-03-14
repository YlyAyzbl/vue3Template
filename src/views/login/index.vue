<template>

  <div class="container">
    <div class="box">
      <h2>Login</h2>
      <div class="input-box">
        <label>账号</label>
        <input type="text" v-model="userName" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password" v-model="passWord" />
      </div>
      <div class="btn-box">
        <a href="#">忘记密码?</a>
        <div>
          <button @click="login">登录</button>
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/modules/user'
const userName = ref('')
const passWord = ref('')
const userStore = useUserStore()
onMounted(() => {
  userStore.login({
    username: userName.value,
    password: passWord.value
  })
})

const login = () => {
  console.log(userName.value, passWord.value)
}

</script>
<style scoped>
@import url(./style.css);
</style>