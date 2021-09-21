<template>
  <div class="container">
    <h1>Home</h1>
  </div>
</template>
<script>
export default {
  async created(){
    console.log('logging in...')
    await this.$tuos.auth.login('lighty262','!Password123')
    .then(e => console.log(e))
    .catch(e => console.log(e))
  }
}
</script>