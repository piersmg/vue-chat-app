<template>
    <aside>
        <h1>Sign in anonymously</h1>
        <button @click="auth.signInAnonymously()" class="button">Sign in</button>

        <div v-if="newUser">
            <h3>Sign up for a new account></h3>
            <a href="#" @click="newUser = false">Already have an account?</a>
        </div>
        <div v-else>
            <h3>Sign in with email</h3>
            <a href="#" @click="newUser = true">New user?</a>
        </div>
        <label for="email">Email</label><br>
        <input v-model="email" placeholder="email" type="email" class="input">
        
        <label for="password">Password</label><br>
        <input v-model="password" type="password" class="input">
        <br>
        <button @click="signInOrCreateUser()" :class="{ 'is-loading':loading }">
            {{ newUser ? 'Sign Up' : 'Login'}}
        </button>
        <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
    </aside>
</template>

<script lang="ts">
import {auth} from '../firebase';
export default {
    data() {
        return {
            auth,
            newUser: false,
            email: '',
            password: '',
            loading: false,
            errorMessage: '',

        }
    },
    methods: {
        async signInOrCreateUser() {
            this.loading = true;
            this.errorMessage = '';
            try {
                if (this.newUser) {
                    await auth.createUserWithEmailAndPassword(this.email, this.password)
                } else {
                    await auth.signInWithEmailAndPassword(this.email, this.password)
                }
            } catch (error) {
                this.errorMessage = error.message;
            }
            this.loading = false;
        }
    }
}
</script>