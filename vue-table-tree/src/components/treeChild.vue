<template>
    <div id="treeBody" class="parent" >
        <div v-for="(c,index) in childs" class="treeBodydiv" v-if="show" >
            <!-- <tr class="show? 'open':''"> -->
            <tr :class="[(index+treeId)%2?'evenTr':'']"> 
                <!-- <td>{{index}}{{treeId}}//////{{c.rootTreeId}}</td> -->
                <td class="treeName">
                    <div class="treeContent" :style="{paddingLeft: paddingLeft + 'px'}">
                        <span v-if="c.children" @click.stop.self="showChildChange(index)" :class="[c.isFolder?'icon-active':'down-icon']" ></span>
                        {{c.name}}
                    </div>    
                </td>
                <td class="treeHref">
                    <div class="treeContent">
                        {{c.href}}
                    </div>        
                </td>
                <td class="treeSequence">
                    <div class="treeContent">
                        <input v-model="c.sequence" type="text"></input>
                    </div>
                </td>
                <td class="treeIsShow">
                    <div class="treeContent">
                        {{c.isShow}}
                    </div>
                </td>
                <td class="treePermission">
                    <div class="treeContent">
                        {{c.permission}}
                    </div>
                </td>
            </tr> 
            <div v-if="c.children" class="tree">
                <!-- <div class="tree" :class="[c.isFolder?'treeOpen':'treeClose']"> -->
                    <treeChild :show.sync="c.isFolder" :childs="c.children" :parentId="c.rootTreeId" :treeId="childTreeId"></treeChild>
                    <!-- <treeChild :show.sync="c.isFolder" :childs="c.children" :parentId="c.rootTreeId" :treeId="childTreeId" @computeHeight="computeOHeight" @animationHeight="animationHeight"></treeChild> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'treeChild',
    data: function() {
        return {
            childTreeId: '',
            paddingLeft: '',
            rootTreeId: '',                 //每棵树的id
            // sameLayerTreeLength: 0,         //同层树的大小
            // childTreeLength: 0,             //子树的大小
            // childTreeHeight: 0
        }
    },
    props:['childs','show','treeId','parentId'],
    mounted () {  
        // this.$emit('computeHeight',this.sameLayerTreeLength);
    },
    created(){
        var i=0;
        for(i; i < this.childs.length; i++){
            this.childs[i].rootTreeId =this.parentId + i +'' + this.treeId;
            this.childs[i].isFolder = true;
        }
        // this.sameLayerTreeLength = i;
        this.childTreeId = this.treeId + 1;
        this.paddingLeft = this.childTreeId * 10;
    },
    watch: {
        show: function() {
            console.log('show change');
            // if(this.show){
            //     // 子树展开时，触发每一棵树展开高度
            //     this.$emit('computeHeight','');
            // }else{
            //     // 子树收起时，触发每一棵树都要减去收起的这颗树的高度
            //     this.$emit('animationHeight', this.childTreeLength);
            // }
        },
        childs: {
            handler: function(){
                console.log('childs change');
            },
            deep: true
        } 
    },
    methods: {
        showChildChange: function(index){
            // console.log(index);
            this.childs[index].isFolder = !this.childs[index].isFolder; 
            this.childs.splice(index,1,this.childs[index]);
            // if(this.childs[index].isFolder){
            //     this.$el.getElementsByClassName('tree')[0].style.height = this.childTreeHeight;
            // }else{
            //     this.$el.getElementsByClassName('tree')[0].style.height = 0;
            // }
        },
        // computeOHeight: function(length){
        //     if(length){
        //         this.childTreeLength = length;
        //         this.sameLayerTreeLength += length;
        //         this.childTreeHeight = length * 40 + 'px';
        //     }
        //     this.$el.getElementsByClassName('tree')[0].style.height = this.childTreeHeight;
        // }
        // },
        // animationHeight: function(number){
        //     this.$el.getElementsByClassName('tree')[0].style.height = (this.childTreeLength - number) * 40 + 'px';
        //     this.$emit('animationHeight', this.childTreeLength);
        // }
    }
}
</script>
<style>
#treeBody tr td{
    width: 200px;
    height: 40px;
    text-align: left;
    vertical-align: middle;
    padding: 0 18px;
    border-right: 1px solid #dfe6ec;
    border-bottom: 1px solid #dfe6ec;
    box-sizing: border-box;
    
}
#treeBody tr .treeName{
    width: 500px;
    border-left: 1px solid #dfe6ec;
}
#treeBody tr .treeContent{
    line-height: 24px;
}
#treeBody tr .treeSequence input{
    padding: 6px 10px;
    width: 23px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
}
#treeBody tr .treeSequence input:focus{
    outline: none;
    border-color: #20a0ff;
    outline-offset: -2px;
}

/* 偶数背景色 */
#treeBody .evenTr td{
    background: #fafafa;
}
#treeBody tr:hover td,
#treeBody tr.evenTr:hover td{
    background-color: #eef1f6; 
}
/* 小树高度 */
#treeBody .tree{
    height: auto;
    overflow: hidden;
}
/* 打开小树 */
#treeBody .tree .treeOpen{
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    -webkit-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: height;
    -o-transition-property: height;
    transition-property: height;
}
/* 关闭小树 */
#treeBody .tree .treeClose{
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    -webkit-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: height;
    -o-transition-property: height;
    transition-property: height;

}
/* down-icon */
 #treeBody .treeContent .down-icon {
    display: inline-block;
    background: url('./images/ic_right.png') no-repeat top left;
    margin-right: 5px;
    width: 12px;
    height: 12px;
    background-size: contain;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
#treeBody .treeContent .icon-active {
        display: inline-block;
        background: url('./images/ic_right.png') no-repeat top left;
        /*transform: rotate(0deg);*/
        margin-right: 5px;
        width: 12px;
        height: 12px;
        background-size: contain;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-transform: translate(0,0);
        -ms-transform: translate(0,0);
        transform: translate(0,0);
        -webkit-transition: -webkit-transform .2s ease;
        transition: -webkit-transform .2s ease;
        transition: transform .2s ease;
        transition: transform .2s ease,-webkit-transform .2s ease;
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
    }
</style>      