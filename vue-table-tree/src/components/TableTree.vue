<template>
  <div>
    <!-- <el-tree :data="list" :props="defaultProps" :render-content="renderContent"></el-tree> -->
    <el-table :data = 'list'>
      <el-table-column type="expand">
        <tableTree v-if='children' :list='children'>            
      </tableTree>
      </el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column prop="href" label="链接"></el-table-column>
      <el-table-column prop="sequence" label="排序"></el-table-column>
      <el-table-column prop="isShow" label="可见"></el-table-column>
      <el-table-column prop="permission" label="权限标识"></el-table-column>
    </el-table>
    <!-- <el-table :data = 'list'>
        <el-table-column type="expand">
          <tableTree v-if='children' :data='children'></tableTree>
        </el-table-column>
        <el-table-column label="名称" prop="children">{{children}}</el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column prop="href" label="链接"></el-table-column>
        <el-table-column prop="sequence" label="排序"></el-table-column>
        <el-table-column prop="isShow" label="可见"></el-table-column>
        <el-table-column prop="permission" label="权限标识"></el-table-column>
    </el-table> -->
      <!-- <el-table-column type="{data.children?'expend':''}" label="名称" prop="data.name">{{data.name}}
        <tableTree v-if='data.children' :list='data.children'></tableTree>
      </el-table-column>
      <el-table-column prop="data.href" label="链接">{{data.href}}</el-table-column>
      <el-table-column prop="data.sequence" label="排序">{{data.sequence}}</el-table-column>
      <el-table-column prop="data.isShow" label="可见">{{data.isShow}}</el-table-column>
      <el-table-column prop="data.permission" label="权限标识">{{data.permission}}</el-table-column> -->
      <!-- <el-table-column type="{children?'expend':''}" label="名称" prop="name">
        <tableTree v-if='children' data='children'></tableTree>
      </el-table-column>
      <el-table-column prop="href" label="链接"></el-table-column>
      <el-table-column prop="sequence" label="排序"></el-table-column>
      <el-table-column prop="isShow" label="可见"></el-table-column>
      <el-table-column prop="permission" label="权限标识"></el-table-column> -->
  </div>
</template>

<script>
export default {
  name: 'tableTree',
  components: {
  },
  data () {
    return {
      data: [],
      // defaultProps:{
      //   children: 'children',
      //   id:'id',
      //   icon: 'icon',
      //   name: 'name',
      //   href: 'href',
      //   sequence: 'sequence',
      //   isShow: 'isShow',
      //   permission: 'permission',
      // }
      defaultProps:{
        children: 'children',
        label: 'name'
      }
    }
  },
  mounted(){
    console.log(this.list);
  },
  props: ['list'],
  methods: {
    // append(store, data) {
    //     store.append({ id: id++, label: 'testtest', children: [] }, data);
    //   },

    //   remove(store, data) {
    //     store.remove(data);
    //   },
    //   renderContent: function(createElement,{node, data, store}){
    //     var self = this;
    //     return createElement('span', [
    //         createElement('span', node.label),
    //         createElement('span', {attrs:{
    //             style:"float: left;margin-right: 20px"
    //         }},  data.href),
    //         createElement('span', {attrs:{
    //             style:"float: left;margin-right: 20px"
    //         }},  data.sequence),
    //         createElement('span', {attrs:{
    //             style:"float: left;margin-right: 20px"
    //         }},  data.isShow),
    //         createElement('span', {attrs:{
    //             style:"float: left;margin-right: 20px"
    //         }},  data.permission),
    //         createElement('span', {attrs:{
    //             style:"float: left; margin-right: 20px"
    //         }},[
    //             createElement('el-button',{attrs:{
    //                 size:"mini"
    //             },on:{
    //                 click:function() {
    //                     console.info("点击了节点" + data.id + "的添加按钮");
    //                     store.append({ id: self.baseId++, label: 'testtest', children: [] }, data);
    //                 }
    //             }},"添加"),
    //             createElement('el-button',{attrs:{
    //                 size:"mini"
    //             },on:{
    //                 click:function() {
    //                     console.info("点击了节点" + data.id + "的删除按钮");
    //                     store.remove(data);
    //                 }
    //             }},"删除"),
    //         ]),
    //     ]);
    //   }
    
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

.el-tree {
  /* float: left; */
  width: 1000px;
}
</style>
