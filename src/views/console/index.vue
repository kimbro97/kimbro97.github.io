<template>
         <console-app></console-app>
<!--        <console-sign-in></console-sign-in>-->
</template>

<script>
import { mdiMenu } from '@mdi/js';
import consoleApp from '../../components/console/console-app.vue';
import consoleSignIn from '../../components/console/console-sign-in.vue';

export default {
    components: {
        consoleApp,
        consoleSignIn
    },
    data() {
        return {
            path: mdiMenu,
            drawer: true
        }
    }
};
</script>
