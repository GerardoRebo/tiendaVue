<script setup>
import { reactive, ref } from "@vue/reactivity";
import User from "../apis/User";
import { useRouter } from "vue-router";

defineProps({
  msg: String,
});
const data = reactive({
  email: "",
  password: "",
})
const router = useRouter();
function submit(){
  User.login(data).then((response)=>{
    if (response.data == "Exitoso") {
      router.push({name: 'Home'})
    }
  }).catch((error) => {

  })
}
</script>

<template>
<div class="page">
  <div class="container">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input v-model="data.email" type="text" />
      <label  for="password">Password</label>
      <input v-model="data.password" type="password" />
      <button @click.prevent="submit" class="button">Registrar</button>
    </form>
  </div>
</div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  padding: 3px;
  box-shadow: 1px 1px 2px grey;
  font-size: 14px;
  font-weight: 300;
  width: 300px;
  margin-bottom: 10px;
}
label {
  color: #3a3836;
  font-weight: bold;
  display: block;
}
label:after { content: ": " }

.button {
   background-color: #1687de; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  display: block;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
border-radius: 10px;
  
}
.container{
  margin: auto;
  width: 30%;
  border: 2px solid rgb(79, 80, 82);
  background-color: rgba(206, 222, 236, 0.533);
  border-radius: 20px;
  padding: 10px;

}
.page{
  width: 100%;
  background-color: rgba(230, 233, 235, 0.533);
}
</style>
