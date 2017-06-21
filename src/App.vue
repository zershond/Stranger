<template>
  <div id="app">
    <Index></Index>
    <MyInfo></MyInfo>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import Index from './index.vue';
import MyInfo from './components/myinfo.vue'
export default {
  name: 'app',
  components: {Index, MyInfo}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #000;
  color: #fff;
}
a{
  color: inherit;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: auto;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
