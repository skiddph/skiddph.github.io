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
      pass: '!Password1234'
    }

    // const sessions = []
    // console.log('Register', await this.$tuos.auth.register(form))
    console.log('Login', await this.$tuos.auth.login(form).then(e => {form.token = e.token; return e}))
    // form.pass = '!Password123'
    // console.log('Reset Password', await this.$tuos.auth.resetPassword(form).catch(e => e))
    // console.log('Delete', await this.$tuos.auth.delete(form).catch(e => e))

    // console.log('My Session', await this.$tuos.auth.mySession(form))
    // console.log('Sessions', await this.$tuos.auth.sessions({...form,page:1,items:1000}).then(e => {e.data.forEach(({_id})=>sessions.push(_id));return e}))
    // sessions.forEach(async id => {
    //   console.log('Logout Session', id, await this.$tuos.auth.logoutSession({...form,id}))
    // })    
    // console.log('Logout Session', await this.$tuos.auth.logoutSession({id:''}))
    
    console.log('Logout All', await this.$tuos.auth.logoutAll(form))
    console.log('Logout', await this.$tuos.auth.logout(form))
  }
}
</script>