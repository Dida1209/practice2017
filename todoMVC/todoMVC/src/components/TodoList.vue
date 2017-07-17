<template>
    <section class='main' v-show='todos.length'>
        <input class='el-icon-arrow-down arrow-icon' v-model='allDone'>
        <ul class='todo-list'>
            <li v-for='todo in filteredTodos'
              class=''
              :class='{completed: todo.completed, editing: todo == editedTodo}'>
              <div class=''>
                <input type='checkbox' v-model='todo.completed'>
                <label @dblclick = 'editTodo(todo)'>{{ todo.label }}</label>
                <span class='el-icon-close' @click='removeTodo(todo)'></span>
              </div>
              <input class='edit' type='text'
                v-model='todo.title'
                v-todo-focus='todo == editedTodo'
                @blur = 'doneEdit(todo)'
                @keyup.enter = 'doneEdit(todo)'
                @keyup.esc = 'cancelEdit(todo)'>
            </li>
        </ul>
        <footer>
            <span class='todo-count'>
                <strong>{{remaining}}</strong> {{ remaining | pluralize}} left
            </span>
            <ul class='filters'>
                <li>
                    <a href='#/all' :class="{ selected: visibility == 'all'}">All</a>
                </li>
                <li>
                    <a href='#/active' :class="{ selected: visibility == 'active'}">Active</a>
                </li>
                <li>
                    <a href='#/completed' :class="{ selected: visibility == 'completed'}">Completed</a>
                </li>
                <li>
                    <a class='clear-completed' @click='removeCompleted' v-show='todos.length > remaining'>Clear completed</a>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script>
import filters from '../Filter.js'
export default {
    data () {
        return {
            editedTodo: null,
            visibility: 'all'
        }
    },
    props: ['todos'],
    computed: {
        filteredTodos: function () {
            return filters[this.visibility](this.todos)
        },
        remaining: function () {
            return filters.active(this.todos).length
        },
        allDone: {
            get: function () {
                // return this.isFinish;
                return filters[this.visibility](this.todos)
            },
            set: function (value) {
                console.log('dianji',this,value,this.completed)
                // this.todolist.
                // return this.isFinish;
                this.todos.forEach(function (todo) {
                    todo.isFinished = value
                });
            }
        }
    },
    filters:{
        pluralize: function (n){
            return n === 1 ? 'item' : 'items'
        }
    },
    mounted () {

    },
    methods: {
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo),1);
        },
        editTodo: function (todo) {
            this.beforeEditCache = todo.label;
            this.editedTodo = todo;
        },
        doneEdit: function (todo) {
            if(!this.editedTodo) {
                return
            }
            this.editedTodo = null
            todo.label = todo.label.trim()
            if (!todo.label){
                this.removeTodo(todo)
            }
        },
        cancelEdit: function (todo) {
            this.editedTodo = null
            todo.label = this.beforeEditCache
        },
        removeCompleted: function () {
            this.todos = filters.active(this.todos)
        }
    },
    directives: {
        'todo-focus': function (el, binding) {
            if(binding.value) {
                el.focus()
            }
        }
    }
}
function onHashChange () {
    var visibility = window.location.hash.replace(/#\/?/, '')
    if(filters[visibility]) {
        app.visibility = visibility
    } else {
        window.location.hash = ''
        app.visibility = 'all'
    }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.main{
    position: relative;
}
.arrow-icon{
    display: block;
    position: absolute;
    top: -60px;
    width: 40px;
    height: 27px;
    padding: 23px 10px 10px 10px;
    color: #475669;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.todo-list li{
    border-bottom: 1px solid #ededed;
    height: 40px;
    line-height: 40px;
    padding: 10px;
    font-size: 18px;
    text-align: left;
}
.todo-list li input{
    width: 20px;
    height: 20px;
}
.todo-list li p {
    width: 540px;
    margin: 0;
    display: inline-block;

}
.todo-list li p span{
    float: right;
    padding-top: 10px;
}
.todo-count{
    display: inline-block;
    width: 100px;
    float: left;
}
.filters li{
    text-align: right;
    display: inline-block;
    width: 105px;
}
.filters li:last-child{
    width: 150px;
}
</style>
