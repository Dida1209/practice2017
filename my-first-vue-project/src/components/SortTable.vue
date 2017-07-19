<template>
    <div>
        <v-table :columns='columns' :data='data'></v-table>
        <button @click='handleAddData'>添加数据</button>
    </div>
</template>
<script >
    import vTable from '../sortTable.js'

    export default {
        components: {
            vTable
        },
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data: [
                    {
                        name: '王小明',
                        age: 10,
                        birthday: '2007-01-01',
                        address: '深圳南山区科技园汇景豪苑海欣阁'
                    },
                    {
                        name: '李晓红',
                        age: 20,
                        birthday: '1997-11-14',
                        address: '深圳市南山区白石洲中信红树湾'
                    },
                    {
                        name: '杜大业',
                        age: 26,
                        birthday: '1991-06-05',
                        address: '深圳市南山区科技园南区'
                    }
                ]

            }
        },
        // mounted () {
        //     console.log('sorttable mounted')
        // }
        methods: {
            handleAddData () {
                this.data.push(
                    {
                        name: '冯小英',
                        age: 24,
                        birthday: '1993-12-09',
                        address: '深圳市南山区科技园南区'
                    }
                )
            }
        }
    }
</script>
<style >

</style>
