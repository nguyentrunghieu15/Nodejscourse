const app = Vue.createApp({
    data() {
        return {
            couter:0,
            name:'',
            URLEvent:'https://vuejs.org/guide/components/events.html',
        }
    },
    computed: {
        fullname(){
            if(this.name==='')
                return '';
            else return this.name+' '+"Hieu";
        },
    },
    methods: {
        add(){
            this.couter++;
        },
        reduce(){
            this.couter--;
        },
        reset(){
            this.name='';
            this.couter=0;
        },
    },
})
app.mount('#vue-event');


