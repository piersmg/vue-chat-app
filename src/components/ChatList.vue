<template>
    <div>
        <ul>
            <li v-for="(chat, index) of chats" :key="chat.id">
                <span v-if="chat.name"><router-link :to="{ name: 'chat', params: {id: chat.id, name: chat.name} }">{{chat.name}}</router-link></span>
                <span v-else><router-link :to="{ name: 'chat', params: {id: chat.id, name: 'Chat room '+index} }">Chat room {{index}}</router-link></span>
            </li>
        </ul>
        <label for="name">Chat room name</label><br>
        <input v-model="name" placeholder="Chat room name" type="text" id="name" class="input" required>
        <button @click="createChatRoom()" class="button">Create new chat room</button>
    </div>
</template>

<script>
import { db } from '../firebase';
export default {
    data () {
        return {
            name: '',
            chats: []
        }
    },
    firestore() {
        return {
            chats: db.collection('chats').where('owner', '==', this.uid)
        }
    },
    methods: {
        async createChatRoom() {
            const newChat = await db.collection('chats').add({
                createdAt: Date.now(),
                owner: this.uid,
                name: this.name,
                members: [this.uid]
            })
            console.log(newChat);
        }
    },
    props: ['uid']
}
</script>