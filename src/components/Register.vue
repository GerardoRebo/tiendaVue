<script setup>

defineProps({
  msg: String
})

</script>

<template>
<div :style="{
  margin: 'auto',
  width: '50%',
  border: '3px solid green',
  'border-radius': '20px',
  padding: '10px',
}">
  <h1>Registro</h1>
  <form>
    <div>
    <label for="name">Nombre</label>
    <input type="text">
    </div>
    <div>
    <label for="email">Email</label>
    <input type="text">
    </div>
    <div>
    <label for="password">Password</label>
    <input type="text">
    </div>
    <div>
    <label for="cpassword">Confirma Password</label>
    <input type="text">
    </div>
  </form>
</div>
</template>

<style scoped>
</style>
