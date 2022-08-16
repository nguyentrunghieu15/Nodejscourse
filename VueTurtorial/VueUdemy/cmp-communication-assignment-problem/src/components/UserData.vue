<template>
    <form @submit.prevent="updateUser" >
        <div>
        <label >Name</label>
        <input type="text" required v-model="enterName">
        </div>
        <div>
        <label >Age</label>
        <input type="text" required v-model="enterAge">
        </div>
        <button>Submit</button>
    </form>
</template>


<script>
export default{
    emits:['update-user'],
    data() {
        return {
            enterName:'',
            enterAge:''
        }
    },
    methods: {
        updateUser(){
            this.$emit('update-user',this.enterName,this.enterAge);
        }
    },
}
</script>

<style>
</style>