<script setup>
import { ref } from 'vue'
import  axios  from "axios";
import User from '../apis/User'

defineProps({
  msg: String
})
const verga = ref("")

function llamada() {
  axios.get("http://localhost/tienda/public/otro").then((response)=>{
    verga.value = response.data
  }).catch((response)=>{
    console.log(response);
  })
}
function login() {
  User.login({hola:"hola"}).then(()=>{
    localStorage.setItem("token", response.data)
  }).catch(()=>{

  })
}
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  {{verga}}
  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click="login">Llamada</button>
</template>

<style scoped>
</style>
