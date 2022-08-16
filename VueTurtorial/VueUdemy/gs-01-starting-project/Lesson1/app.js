const app = Vue.createApp({
    data() {
        return {
            mainGoal:' Master Vue ',
            courseGoalA:'Become a Master Veu',
            courseGoalB:'Build a amazing app!',
            vLink:"https://vuejs.org/",
        }
    },
    methods: {
        courseGoal(){
            const num= Math.random();
            if(num<0.5){
                return this.courseGoalA;
            }else return this.courseGoalB;
        }
    },
});
app.mount('#user-goals')


