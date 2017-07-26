<template>
    <div id="app">
      <div class="collapse-title">
          <a @click="showCollapse" >点击打开collapse</a>
      </div>
      <transition name="fade">
        <div class="collapse-layer in" v-show="isShowCollapse">
            <div id="targetCollapse" class="collapse-content">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isShowCollapse: false
    }
  },
  computed:{
    targetHeight: function (){
      console.log(this.$el('#targetCollapse'));
    }
  },
  mounted(){
    var element = this.$el.getElementsByClassName('collapse-content')[0];
      console.log(window.getComputedStyle(element,null).height);
      console.log((element.currentStyle? element.currentStyle : window.getComputedStyle(element, null)).height);
      console.log(element.offsetHeight);
  },
  methods: {
    showCollapse: function () {
      this.isShowCollapse = !this.isShowCollapse;
      var element = this.$el.getElementsByClassName('collapse-content')[0];
      console.log(window.getComputedStyle(element,null).height);
      console.log((element.currentStyle? element.currentStyle : window.getComputedStyle(element, null)).height);
      console.log(element.offsetHeight);
    }
  },
  create:{

  },
  watch:{
    isShowCollapse: function(){

    }
  }
}
</script>

<style>
        .collapse-title{
            padding:10px 15px;
            border:1px solid #ddd;
            background: #f5f5f5;
            border-radius: 3px;
            font-size: 16px;
        }
        .collapse-title a{
            cursor: pointer;
        }
        .collapse-layer{
            border: 1px solid #ddd;
            color:#333;
            font-size:14px;
            background: #fff;
            margin-top:-3px;
        }
        .collapse-content {
            padding: 15px;
            min-height: 20px;
        }
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
          opacity: 0
        }
        .in {
          display: block;
        }
        /*.in{
            animation: collapseIn 5s;
        }*/
        /*@keyframes collapseIn {
            0%{
                height: 0;
            }
            100%{
                height: auto;
            }
        }*/
</style>
