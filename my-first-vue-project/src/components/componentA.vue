<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click='onClickMe'>emit function!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello componentA'
    }
  },
  props: ["msgFather"],
  methods:{
  	onClickMe:function(){
  		console.log(this.msgFather);
  		this.$emit('child-function','emit function on');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
