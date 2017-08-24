<template>
  <div id="app">
      <!-- <test  :list='list'></test> -->
      <test :list='list' :title='title' ></test>
  </div>
</template>

<script>
// import TableTree from './components/TableTree'
import myTree from './components/myTree'

export default {
  name: 'app',
  components: {
    'test': myTree
  },
  data: function(){
    return {
      isShowChild: true,
      list: [
        {
          id:1,
          icon: 'el-icon-menu',
          name: '第一棵树',
          href: 'sot/href',
          sequence: 10,
          isShow: '显示',
          permission: '权限',
          children:[
            {
              id:1,
              icon: 'el-icon-menu',
              name: '第一棵树的第一个儿子',
              href: 'sot/href',
              sequence: 10,
              isShow: '显示',
              permission: '权限',
              children:[
                {
                  id:1,
                  icon: 'el-icon-menu',
                  name: '第一棵树的第一个儿子的第一个孩子',
                  href: 'sot/href',
                  sequence: 10,
                  isShow: '显示',
                  permission: '权限',
                  children:[
                    {
                      id:1,
                      icon: '',
                      name: '第一棵树的第一个儿子的第一个孩子的孩子',
                      href: 'sot/href',
                      sequence: 10,
                      isShow: '显示',
                      permission: '权限'
                    },
                  ]
                },
              ]
            },
            {
              id:1,
              icon: 'el-icon-menu',
              name: '第一棵树的第二个儿子',
              href: 'sot/href',
              sequence: 10,
              isShow: '显示', 
              permission: '权限'
            }
          ]
        },
        {
          id:1,
          icon: '',
          name: '第二棵树',
          href: 'sot/href',
          sequence: 10,
          isShow: '显示',
          permission: '权限'
        },
        {
          id:1,
          icon: 'el-icon-menu',
          name: '第三棵树',
          href: 'sot/href',
          sequence: 10,
          isShow: '显示',
          permission: '权限',
          children: [
            {
              id:1,
              icon: 'el-icon-menu',
              name: '第三棵树的第一个儿子',
              href: 'sot/href',
              sequence: 10,
              isShow: '显示', 
              permission: '权限',
              children:[
            {
              id:1,
              icon: 'el-icon-menu',
              name: '第一棵树的第一个儿子',
              href: 'sot/href',
              sequence: 10,
              isShow: '显示',
              permission: '权限',
              children:[
                {
                  id:1,
                  icon: 'el-icon-menu',
                  name: '第一棵树的第一个儿子的第一个孩子',
                  href: 'sot/href',
                  sequence: 10,
                  isShow: '显示',
                  permission: '权限',
                  children:[
                    {
                      id:1,
                      icon: '',
                      name: '第一棵树的第一个儿子的第一个孩子的孩子',
                      href: 'sot/href',
                      sequence: 10,
                      isShow: '显示',
                      permission: '权限'
                    }
                  ]
                },
              ]
            }
            ]
            }]
        }
        ],
      title:['名称', '链接', '排序', '可见', '权限标识'],
      oddSelect: false
    }
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
#treeBody> .tr:nth-child()even> td{
    background: #fafafa;
}
</style>
