const app = Vue.createApp({
    data() {
        return {
            name:"Nguyen Trung Hieu",
            output1:'OUTPUT',
            output2:'OUTPUT',

        }
    },
    methods: {
        showAlert(){
            alert(this.name);
        },
        input1(event){
            this.output1= event.target.value;s
        },
        input2(event){
            if(event.target.value.trim()!==""){
                this.output2=event.target.value.trim();
            }
        }
    },
})

app.mount("#eventPractice")