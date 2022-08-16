<template>
    <body>
        <h1>List User</h1>
        <section>
            <user-data @update-user="updateUser"></user-data>
        </section>
        <ul>
            <active-user v-for="user in users" :key="user.id" 
            :name="user.name"
            :age="user.age"
            ></active-user>
        </ul>
    </body>
</template>


<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default{
  components: { UserData, ActiveUser },
    data() {
        return {
            users:[{id:'151102', name:"Nguyen Trung Hieu",age:"19"},
            {id:'270902', name:"Nguyen Thi Cam Tu",age:"19"}],
        }
    },
    methods: {
        updateUser(name,age){
            const newuser={
                id: new Date().toISOString,
                name,
                age
            }
            this.users.push(newuser);
        }
    }
}
</script>

<style>
</style>