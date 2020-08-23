<template>
  <div id="app">
    <!-- <amplify-authenticator> -->
      <!-- <amplify-sign-in header-text="Custom sign-in" slot="sign-in"></amplify-sign-in> -->
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--       <div id="amplify-signout">
        <amplify-sign-out></amplify-sign-out>
      </div> -->
    <!-- </amplify-authenticator> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'App',
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined
    }
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#amplify-signout {
  width: 100px;
  margin: 0 auto;
}
</style>
