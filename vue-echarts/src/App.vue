<template>
  <div id="app">
    <pie></pie>
    <scatter></scatter>
    <D-map></D-map>
  </div>
</template>

<script>
// import EchartsTest from './components/Echarts-test'
import Pie from './components/pie'
import Map from './components/map'
import Scatter from './components/scatter'

export default {
  name: 'app',
  components: {
    // 'hello':EchartsTest
    // 'hello': Pie
    // 'hello': Map
    'scatter': Scatter,
    'pie': Pie,
    'D-map': Map
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
