;(function(){
    var Due = function (obj) {
        this.el = document.querySelectorAll(obj.el);
        this.data = obj.data || {};
        this.init();
    };
    Due.prototype = {
        constructor: Due,
        init: function () {
            this.bindText();
            this.bindModel();
        },
        defineObj: function (o, p, v) {
            var val = v || '';
            var _that = this;
            try{
                Object.defineProperty(o, p, {
                    get: function () {
                        return val;
                    },
                    set: function(newVal){
                        console.log('2/defineProperty set')
                        val = newVal;
                        _that.bindText();
                    },
                    enumerable: true,
                    configurable: true
                })
            }catch(e){
                console.log('ie8 不支持 defineProperty')
            }
        },
        bindText: function () {
            //找到含有D-text属性的标签，修改它的innerHtml
            var textDoms = document.querySelectorAll('[D-text]');
            var bindProp;
            console.log('3/bindText');
            for(var i=0; i<textDoms.length;i++){
                bindProp = textDoms[i].getAttribute('D-text');
                textDoms[i].innerHTML = this.data[bindProp];
            }
        },
        bindModel: function () {
            // 找到含有D-model属性的标签，绑定keyup事件
            // 每次keyup时都把hasOwnProperty中绑定的属性改一下，等于触发set
            // 把D-model中对应的值改成data的属性值
            var _that = this;
            var modelDoms = document.querySelectorAll('[D-model]');
            var bindProp = '';
            for(var i = 0; i < modelDoms.length; i++){
                bindProp = modelDoms[i].getAttribute('D-model');
                modelDoms[i].value = this.data[bindProp];
                // 数据劫持，确定要绑定的属性
                this.defineObj(this.data, bindProp);
                if(document.addEventListener){
                    modelDoms[i].addEventListener('keyup', function(e){
                        console.log('1/keyup')
                        _that.data[bindProp] = e.target.value;
                    }, false);
                }else{
                    modelDoms[i].attachEvent('onkeyup',function(e){
                        _that.data[bindProp] = e.target.value;
                    }, false);
                }
            }
        }
    }
window['Due'] = Due;
})(window)