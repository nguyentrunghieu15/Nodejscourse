const app = Vue.createApp({
    data() {
        return {
            BoxA:false,
            BoxB:false,
            BoxC:false,
        }
    },  
    computed:{
        selectedBoxA(){
            return {active:this.BoxA};
        }
    },
    methods: {
        onClick(box){
            this.BoxA=false;
            this.BoxB=false;
            this.BoxC=false;
            if(box=='A'){
                this.BoxA=true;
            }else if(box=='B'){
                this.BoxB=true;
            }else{
                this.BoxC=true;
            }
        }
    },  
})
app.mount("#styling")