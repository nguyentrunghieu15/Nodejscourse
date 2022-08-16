import { createApp } from 'vue';

import App from './App.vue'
import FriendContacts from './components/FriendContacts.vue'
import NewFriend from './components/NewFriend.vue'

const app = createApp(App);

app.component('friend-contact',FriendContacts);
app.component('new-friend',NewFriend);
app.mount("#app")
