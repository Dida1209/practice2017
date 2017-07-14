<template>
    <section class="list-detail" v-show="isActive">
        <span class="el-icon-arrow-down arrow-icon" ></span>
        <ul class="list-items">
            <li v-for="(item,index) in todolist" v-if="show">
                <input type="checkbox" v-model="completed" :value="{{index}}">
                <p>
                    {{index+1}} 、
                    {{item.label}}
                    <span class="el-icon-close" @click="deleteTodo" :index='index'></span>
                </p>
            </li>
        </ul>
        <footer>
            <span class="todo-count">
                <strong>0</strong>items left
            </span>
            <ul class="todo-tool">
                <li>
                    <a @click="showAll">All</a>
                </li>
                <li>
                    <a @click="showActive">Active</a>
                </li>
                <li>
                    <a @click="showFinish">Completed</a>
                </li>
                <li>
                    <a>Clear completed</a>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script>
export default {
    // name: 'todolist',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            index:'',
            // completed:[],
            show:true,
            isActive:false
        }
    },
    props: ['todolist'],
    computed: {
        completed: {
            get: function () {
                // return this.isFinish;
            },
            set: function (value) {
                console.log('dianji',this,value,this.completed)
                // this.todolist.
                // return this.isFinish;
                var that = this;
                this.todolist.forEach( function(element) {
                    if(that.completed.indexOf(element)!==-1){
                        element.isFinish=value;
                    }
                    console.log(element,element.isFinish)
                });
            }
        }
    },
    watch: {
        todolist: {
            handler: function (){
                if(this.todolist.length<0){
                this.isActive=false;
                }else{
                this.isActive=true;
                }
            },
            deep: true
        }
        // },
        // completed: {
        //     handler: function() {
        //         console.log(completed);
        //     }
        // }
    },
    mounted () {

    },
    methods: {
        deleteTodo: function () {
            this.todolist.splice(this.index,1);
        },
        showAll: function () {

        },
        showActive: function () {
            var that = this;
            that.todolist.forEach( function(element, index) {
                if(element.isFinish){
                    that.show=false;
                }else{
                    that.show=true;
                }
            });
        },
        showFinish: function () {
            var that = this;
            that.todolist.forEach( function(element, index) {
                if(element.isFinish){
                    that.show=true;
                }else{
                    that.show=false;
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-detail{
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
.list-items li{
    border-bottom: 1px solid #ededed;
    height: 40px;
    line-height: 40px;
    padding: 10px;
    font-size: 18px;
    text-align: left;
}
.list-items li input{
    width: 20px;
    height: 20px;
}
.list-items li p {
    width: 540px;
    margin: 0;
    display: inline-block;

}
.list-items li p span{
    float: right;
    padding-top: 10px;
}
.todo-count{
    display: inline-block;
    width: 100px;
    float: left;
}
.todo-tool li{
    text-align: right;
    display: inline-block;
    width: 105px;
}
.todo-tool li:last-child{
    width: 150px;
}
</style>
