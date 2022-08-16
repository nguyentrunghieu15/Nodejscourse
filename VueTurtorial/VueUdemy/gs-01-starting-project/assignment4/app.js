const app = Vue.createApp({
    data() {
        return {
            className:"",
            visibleS:true,
            colorP:"",
        }
    },
    methods: {
        clickButton(){
            this.visibleS=!this.visibleS;
        },
    },
});
app.mount("#assignment")
