const app = Vue.createApp({
    data() {
        return {
            result:0,
        }
    },
    watch:{
        result(){
            const that=this;
            setTimeout(()=>{
                that.result=0;
            },5000);
        }
    },
    methods: {
        add5(){
            this.result+=5;
        },
        add1(){
            this.result+=1;
        }
    },
    computed:{
        RESULT(){
            if(this.result<37){
                return "Not there yet";
            }else if(this.result==37){
                return this.result;
            }else{
                return "Too much";
            }
        }
    },
})
app.mount("#assignment")