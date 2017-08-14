<template>
  <div id="hello">
    <div  v-for="(collapseItem, index) in collapseArray">
      <div class="collapse_title">
        <a @click="showCollapse(index)" >{{collapseItem.title}}</a>
      </div>
      <div :class="{collapse_layer:true,collapseIn: collapseItem.isShowCollapse,collapseOut:!collapseItem.isShowCollapse}">
        <div class="collapse_content">
          {{collapseItem.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
//      isShowCollapse: false
    }
  },
  props:['collapseArray'],
  mounted(){
      var elementContent = this.$el.getElementsByClassName('collapse_content');
      console.log('start mounted',elementContent);
      for(var i=0; i<elementContent.length; i++){
//          console.log(elementContent[i].offsetHeight);
          this.collapseArray[i].height = elementContent[i].offsetHeight ;
//          this.collapseArray[i].height = (elementContent[i].currentStyle? elementContent[i].currentStyle : window.getComputedStyle(elementContent[i], null)).offsetHeight;
      }
      console.log(elementContent,this.collapseArray);

  },
  methods: {
    showCollapse: function (index) {
        this.collapseArray[index].isShowCollapse = !this.collapseArray[index].isShowCollapse;
        var eleParent = this.$el.getElementsByClassName('collapse_layer')[index];
        var oHeight = this.collapseArray[index].height;
        if(this.collapseArray[index].isShowCollapse){
          eleParent.style.height = oHeight + 'px';
          eleParent.style.opacity = '1';
          console.log(eleParent.style.height);
        }else{
          eleParent.style.height = '0';
          eleParent.style.opacity = '0';

        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collapse_title{
    padding:10px 15px;
    border:1px solid #ddd;
    background: #f5f5f5;
    border-radius: 3px;
    font-size: 16px;
  }
  .collapse_title :before{
    content:'';
    display: inline-block;
    width: 18px;
    height: 12px;
    background: url('./../assets/down.png') no-repeat top left;
    background-size:80%;
  }
  .collapse_title a{
    cursor: pointer;
  }
  .collapse_layer{
    border: 1px solid #ddd;
    color:#333;
    font-size:14px;
    background: #fff;
    margin-top:-3px;
    /*display: block;*/
    height:  0;
    overflow: hidden;
    opacity:0;
  }
  .collapse_content {
    padding: 15px;
  }
  .collapseIn{
     position: relative;
     height: 0;
     overflow: hidden;
     -webkit-transition-timing-function: ease;
     -o-transition-timing-function: ease;
     transition-timing-function: ease;
     -webkit-transition-duration: .35s;
     -o-transition-duration: .35s;
     transition-duration: .35s;
     -webkit-transition-property: height;
     -o-transition-property: height;
     transition-property: height;
   }
  .collapseOut{
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    -webkit-transition-duration: .35s;
    -o-transition-duration: .35s;
    transition-duration: .35s;
    -webkit-transition-property: height,opacity;
    -o-transition-property: height,opacity;
    transition-property: height,opacity;
  }
</style>
