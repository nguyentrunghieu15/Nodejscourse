<template>
    <section>
        <h1>{{name}}</h1>
        <h2>{{age}}</h2>
    </section>
</template>


<script>
export default{
    props:{
        name:{
            type: String,
            required:true,
        },
        age:{
            type:String,
            required:true,
            validator (data){
                return data>0;
            }
        }
    },
    data() {
        return {  
        }
    },
    methods: {
        
    },
}
</script>

<style>
</style>