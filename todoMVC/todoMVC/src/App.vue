<template>
    <div id='app'>
        <img src='./assets/logo.png'>
        <section>
            <header class='header'>
                <h1 class='title'>todos</h1>
                <input  class='new-todo' placeholder='What needs to be done?' v-model='newTodo' @keyup.enter='addNewTodo'>
            </header>
        </section>
        <TodoList :todolist='todoList'></TodoList>
        <section>
            <footer>
                @copyright Dida
            </footer>
        </section>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Local from './local.js'

export default {
    name: 'app',
    components: {
        TodoList
    },
    data () {
      return {
        newTodo:'',
        todoList: Local.fetch()
      }
    },
    watch: {
        todoList: {
            handler: function () {
                Local.save(this.todoList)
            },
            deep: true
        }
    },
    methods: {
        addNewTodo: function () {
            console.log(this.todoList,this.newTodo)
            this.todoList.push({
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
