<template>
    <link rel="stylesheet" href="style.css">
    <header><h1>My Friends</h1></header>
    <new-friend @add-newfriend="addFriend"></new-friend>
    <section>
        <ul>
            <friend-contacts v-for="(friend) in Friends" :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone="friend.phone"
            :email="friend.email"
            @remove-friend="removeFriend"
            ></friend-contacts>
        </ul>
    </section>
</template>

<script>
import FriendContacts from './components/FriendContacts.vue'
import NewFriend from './components/NewFriend.vue';
// import validator from 'validator'
    export default{
  components: { FriendContacts, NewFriend },
        data() {
            return {
                Friends:[
                    {
                        id:"15112002",
                        name: "Nguyen Trung Hieu",
                        phone: "0966619460",
                        email: "hieuntt@gmail.com"
                    },
                    {
                        id:"27092002",
                        name: "Nguyen Thi Cam Tu",
                        phone: "0869282599",
                        email: "nguyenthicamtugl27092002@gmail.com"
                    }
                ]
            }
        },
        methods:{
            addFriend(name,phone,email){
                const newFriend={
                    id: new Date().toISOString(),
                    name,
                    phone,
                    email
                }
                    this.Friends.unshift(newFriend);
            },
            removeFriend(id){
                const index=this.Friends.findIndex((Element)=> Element.id===id)
                this.Friends.splice(index,1);
            }
        }
    }
</script>

<style>

</style>