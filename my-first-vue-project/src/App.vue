<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model='newItem' @keyup.enter='addNew'>
    <ul>
      <li v-for='item in items'
      v-bind:class='{finished:item.isFinished}'
      v-on:click='toggleFinish(item)'
      >
        {{item.label}}
      </li>
    </ul>
    <p>child tells me :{{childword}}</p>
    <component-a msgFather='father and child' v-on:child-function="childFunction"></component-a>
  </div>
 </template>

<script>
// import Hello from './components/Hello'
import Store from './store'
import ComponentA from './components/componentA'

export default {
  data: function () {
    return {
      title: 'this is a todo list!',
      items: Store.fetch() ,
      newItem: ''   ,
      childword:''
    }
  },
  components: {
    ComponentA
  },
  watch: {
    items: {
      handler:function(items){
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(item){
      item.isFinished = !item.isFinished;
    },
    addNew: function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      this.newItem='';
    },
    childFunction:function(msg){
      console.log('father')
      this.childword=msg;
    }
  }
}

</script>

<style>
.finished {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
