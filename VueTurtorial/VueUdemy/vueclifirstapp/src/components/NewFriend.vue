<template>
    <form @submit.prevent="SubmitForm()">
        <div>
            <label >Name</label>
            <input type="text" v-model="Name" required>
        </div>
        <div>
            <label >Phone Number</label>
            <input type="text" v-model="Phone" required>
        </div>
        <div>
            <label >E-mail</label>
            <input type="email" v-model="Email" required>
        </div>
        <button>Submit</button>
    </form>        
</template>

<script>

export default{
    emits:['add-newfriend'],
    data(){
        return {
            Name:'',
            Phone:'',
            Email:''
        }
    },
    methods:{
        SubmitForm(){
            this.$emit('add-newfriend',this.Name,this.Phone,this.Email);
        },
    }
}
</script>

<style>
    form{
        box-shadow: 1px 2px 5px 10px #ccc;
        width: 90%;
        max-width: 40rem;
        margin: 3rem auto;
        padding: 2rem;
        border-radius: 10px;
        text-align: left;
    }
    form input{
        padding: 1rem auto;
        margin: 1rem auto;
    }
    form label{
        width: 7rem;
        display: inline-block;
    }
</style>