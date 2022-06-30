<script setup>
import { reactive, ref } from 'vue'
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
function otro() {
  User.otro().then((response)=>{
    alert(response.data);
  }).catch(()=>{

  })
}
function login() {
  User.login({hola:"hola"}).then((response)=>{
    alert(response.data);
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
  <button @click="otro">Otro</button>
</template>

<style scoped>
</style>
