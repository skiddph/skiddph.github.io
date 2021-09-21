<template>
  <div class="container">
    <h1>Home</h1>
  </div>
</template>
<script>
export default {
  async created(){
    const form = {
      user: 'lighty262',
      email: 'yeoligoakino@gmail.com',
      name:'Yeoligo Akino',
      pass: '!Password123'
    }

    console.log('starting...')
    this.$tuos.auth.register(form)
    .then( e => {
      const {type, message,data,token} = e
      if(type === 'success'){
        console.log(message, '\nData: ' + data, `\nToken: ${token}`)
      } else throw new Error(message)
    })
    .catch(e => console.log('Error:', e.message))
    .then(() => {
      console.log('logging in...')
      return this.$tuos.auth.login(form)
    })
    .catch(e => console.log(e.message))
    .then( e => {
      console.log(e)
      return e.token
    })
    .then((token) => {
      console.log(`Token:'${token}'`)
      return this.$tuos.auth.logout({token})
    })
    .then( e => console.log(e))
  }
}
</script>