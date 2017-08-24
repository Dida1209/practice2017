<template>
  <div class="showTable" >
      <table>
          <thead>
              <div class="treeThead">
                <tr>
                    <th v-for="name in title">
                        <div class="treeTitle">
                            {{name}}
                        </div>
                    </th>
                </tr>
              </div>
          </thead>
          <tbody>
              <treeChild :show.sync="show" :childs="list" :treeId="treeId" :parentId="root"></treeChild>
          </tbody>
      </table>
  </div>
</template>
<script>
import TreeChild from './treeChild'

export default {
    data: function() {
        return {
            show: true,
            treeId: 0,
            root: 'root--'
        }
    },
    props:['list','title'],
    components: {
        'treeChild': TreeChild
    },
    mounted(){
        console.log('mytree   ', this.list);
    },
    watch: {
        list:{
            handler:function(val,oval){
                console.log(val,oval);
            },
            deep: true
        } 
    },
    methods: {
        // showChange: function(isShow){
        //     console.log('第一个父亲showChange');
        //     this.show = isShow;
        // },
        // showParentChange: function(){
        //     this.show = !this.show;
        // }
    }
}
</script>
<style>
table{
    border-spacing: 0;
    font-size: 14px;
}
.treeThead th{
    text-align: left;
    padding: 0 18px;
    width: 200px;
    height: 40px;
    text-overflow: ellipsis;
    vertical-align: middle;
    box-sizing: border-box;
    border: 1px solid #dfe6ec;
    border-left: none;
    background-color: #eef1f6;    
}
.treeThead th:nth-child(1){
    width: 500px;
    border-left: 1px solid #dfe6ec;
}

.treeThead .treeTitle{
    line-height: 30px;
}
</style>      