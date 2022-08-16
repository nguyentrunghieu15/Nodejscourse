const app = Vue.createApp({
    data() {
        return {
            enterText:'',
            tasks:[],
            show:true,
        }
    },
    methods: {
        addTask(){
            if(this.enterText.trim()!==''){
                this.tasks.push(this.enterText);
            }
        },
        taskShow(){
            this.show=!this.show;
        }
    },
});

app.mount("#assignment");