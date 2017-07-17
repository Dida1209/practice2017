<template>
    <div id='app'>
        <img src='./assets/logo.png'>
        <section>
            <header class='header'>
                <h1 class='title'>todos</h1>
                <input  class='new-todo' autofocus autocomplete='off' placeholder='What needs to be done?' v-model='newTodo' @keyup.enter='addTodo'>
            </header>
        </section>
        <TodoList :todos='todos'></TodoList>
        <section>
            <footer>
                @copyright Dida
            </footer>
        </section>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Store from './Store.js'

export default {
    name: 'app',
    components: {
        TodoList
    },
    data () {
      return {
        newTodo:'',
        todos: Store.fetch()
      }
    },
    watch: {
        todos: {
            handler: function () {
                Store.save(this.todos)
            },
            deep: true
        }
    },
    methods: {
        addTodo: function () {
            console.log(this.todos,this.newTodo)
            var value = this.newTodo && this.newTodo.trim()
            if(!value){
              return
            }
            this.todos.push({
                label: this.newTodo,
                isFinished: false
            })
            this.newTodo = ''
        }
    }
}
</script>

<style>
/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}*/
#app{
    text-align: center;
    width: 600px;
    margin: 0 auto;
}
.title{
    color:#1F2D3D;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
}
.new-todo{
    position: relative;
    padding: 16px 16px 16px 60px;
    background: #EFF2F7;
    font-size: 24px;
    width: 100%;
    border: none;
    box-sizing: border-box;
}
</style>
