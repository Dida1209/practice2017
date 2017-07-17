const STORE_KEY = "todolist-vue"

export default {
    fetch: function(){
        return JSON.parse(window.localStorage.getItem(STORE_KEY)||'[]');
    },
    save: function(items){
        window.localStorage.setItem(STORE_KEY, JSON.stringify(items));
    }
}
