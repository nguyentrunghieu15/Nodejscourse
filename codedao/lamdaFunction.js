// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x * x;
// }


//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        const tasksIncomplete = this.tasks.filter((value) => value.completed===false);
        return tasksIncomplete;
    }
}

console.log(tasks.getTasksToDo())
