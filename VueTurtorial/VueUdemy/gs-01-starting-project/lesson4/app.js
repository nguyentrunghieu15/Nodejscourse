const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      Value:'', 
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.Value);
    },
    removeGoal(index){
      this.goals.splice(index,1);
    },
    Alert(){
        alert("You clicked!")
    }
  },
});

app.mount('#user-goals');

