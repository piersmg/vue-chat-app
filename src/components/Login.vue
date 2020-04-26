<template>
    <aside>
        <h1>Sign in anonymously</h1>
        <button @click="auth.signInAnonymously()" class="button">Sign in</button>
    </aside>
</template>

<script lang="ts">
import {auth} from '../firebase';
export default {
    data() {
        return {
            auth,
        }
    },
}
</script>