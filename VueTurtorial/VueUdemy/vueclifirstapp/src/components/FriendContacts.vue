<template>
    <li id="afriends" >
        <h1>{{name}}</h1>
        <button @click="setShowHidden"  > {{detailsAreVisible?'Hidden':'Show'}}</button>
        <button @click="removeFriend">Remove</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone</strong> {{phone}} </li>
            <li><strong>Email</strong> {{email}} </li>
        </ul>
    </li>
</template>

<script>
    export default{
        emits:['remove-friend'],
        props:{
            id:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            } ,
            email:{
                type:String,
                required:true,  
            },
            phone:{
                type:String,
                required:true,
            },
        },
        data(){
            return {
                detailsAreVisible :true,
            }
        },
        methods:{
            setShowHidden(){
                this.detailsAreVisible=!this.detailsAreVisible;
            },
            removeFriend(){
                this.$emit('remove-friend',this.id);
            }
        }

    }
</script>
   
<style>
     #afriends{
        border-bottom: 1px solid #111 ;
        text-align: center;
     }
     #afriends h1 {
        background-color: aqua;
        text-align: center;
        box-shadow: 0.5px 0.5px 0.5px 0.5px #ccc;
        border-bottom: 5px solid #ccc;
        margin: 1.25rem auto;
        padding: 1rem;
        border-radius: 10px;
     }
     #afriends button{
        background-color: antiquewhite;
        text-align: center;
        padding: 0.5rem 1rem;
        margin: 1rem 1rem 1rem 1rem;
     }
     #afriends ul li {
        text-align: left;
     }
</style>